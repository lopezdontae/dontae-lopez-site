/**
 * DONTAE LOPEZ — WebGL Halftone (Yuga Labs style)
 *
 * Architecture:
 * 1. Full-screen quad with SDF shader
 * 2. bg4.png = tiled rounded-square SDF (repeats to form grid)
 * 3. Canvas-generated DL logo SDF
 * 4. Navier-Stokes fluid simulation for mouse interaction
 * 5. Noise modulates dot visibility (flowing organic bands)
 */

import * as THREE from 'three';

// ─────────────────────────────────────────────
// FLUID SIMULATION (GPU-based Navier-Stokes)
// ─────────────────────────────────────────────

class FluidSim {
  constructor(renderer, opts = {}) {
    this.renderer = renderer;
    this.simWidth = opts.simWidth || 128;
    this.simHeight = opts.simHeight || 128;
    this.dyeWidth = opts.dyeWidth || 512;
    this.dyeHeight = opts.dyeHeight || 512;
    this.curl = opts.curl || 20;
    this.pressure = opts.pressure || 0.8;
    this.dissipation = opts.dissipation || 0.97;
    this.dyeDissipation = opts.dyeDissipation || 0.98;

    this.camera = new THREE.Camera();
    this.camera.position.z = 1;
    this.triGeom = new THREE.PlaneGeometry(2, 2);

    this._initFBOs();
    this._initPrograms();

    this.lastMouse = { x: 0, y: 0 };
    this.hasMoved = false;
  }

  _createDoubleFBO(w, h, filtering) {
    const params = {
      minFilter: filtering || THREE.LinearFilter,
      magFilter: filtering || THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
    };
    return {
      read: new THREE.WebGLRenderTarget(w, h, params),
      write: new THREE.WebGLRenderTarget(w, h, params),
      swap() { [this.read, this.write] = [this.write, this.read]; },
    };
  }

  _initFBOs() {
    this.velocity = this._createDoubleFBO(this.simWidth, this.simHeight);
    this.pressure_ = this._createDoubleFBO(this.simWidth, this.simHeight);
    this.divergence_ = new THREE.WebGLRenderTarget(this.simWidth, this.simHeight, {
      minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat, type: THREE.HalfFloatType,
    });
    this.curl_ = new THREE.WebGLRenderTarget(this.simWidth, this.simHeight, {
      minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat, type: THREE.HalfFloatType,
    });
    this.dye = this._createDoubleFBO(this.dyeWidth, this.dyeHeight);
  }

  _createMat(fs, uniforms) {
    return new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
        uniform vec2 texelSize;
        void main() {
          vUv = uv;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(position, 1.0);
        }`,
      fragmentShader: fs,
      uniforms: Object.assign({ texelSize: { value: new THREE.Vector2() } }, uniforms),
      depthTest: false,
      depthWrite: false,
    });
  }

  _blit(mat, target) {
    const mesh = new THREE.Mesh(this.triGeom, mat);
    const scene = new THREE.Scene();
    scene.add(mesh);
    this.renderer.setRenderTarget(target);
    this.renderer.render(scene, this.camera);
    this.renderer.setRenderTarget(null);
    scene.remove(mesh);
  }

  _initPrograms() {
    this.splatMat = this._createMat(`
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform vec2 prevPoint;
      uniform float radius;
      varying vec2 vUv;
      float line(vec2 uv, vec2 p1, vec2 p2) {
        vec2 pa = uv - p1, ba = p2 - p1;
        pa.x *= aspectRatio; ba.x *= aspectRatio;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        return length(pa - ba * h);
      }
      float cubicIn(float t) { return t * t * t; }
      void main() {
        vec3 splat = cubicIn(clamp(1.0 - line(vUv, prevPoint, point) / radius, 0.0, 1.0)) * color;
        vec3 base = texture2D(uTarget, vUv).rgb;
        gl_FragColor = vec4(clamp(base + splat, vec3(0.0), vec3(1.0)), 1.0);
      }`,
      {
        uTarget: { value: null },
        aspectRatio: { value: 1.0 },
        color: { value: new THREE.Vector3() },
        point: { value: new THREE.Vector2() },
        prevPoint: { value: new THREE.Vector2() },
        radius: { value: 0.0 },
      }
    );

    this.curlMat = this._createMat(`
      uniform sampler2D uVelocity;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      void main() {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
      }`, { uVelocity: { value: null } });

    this.vorticityMat = this._createMat(`
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      void main() {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
      }`,
      { uVelocity: { value: null }, uCurl: { value: null }, curl: { value: this.curl }, dt: { value: 0.016 } }
    );

    this.divergenceMat = this._createMat(`
      uniform sampler2D uVelocity;
      varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      void main() {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
      }`, { uVelocity: { value: null } });

    this.pressureMat = this._createMat(`
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      void main() {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float divergence = texture2D(uDivergence, vUv).x;
        gl_FragColor = vec4((L + R + B + T - divergence) * 0.25, 0.0, 0.0, 1.0);
      }`, { uPressure: { value: null }, uDivergence: { value: null } });

    this.gradSubMat = this._createMat(`
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      void main() {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 vel = texture2D(uVelocity, vUv).xy - vec2(R - L, T - B);
        gl_FragColor = vec4(vel, 0.0, 1.0);
      }`, { uPressure: { value: null }, uVelocity: { value: null } });

    this.advectMat = this._createMat(`
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;
      varying vec2 vUv;
      void main() {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = texture2D(uSource, coord) * dissipation;
        gl_FragColor.a = 1.0;
      }`,
      {
        uVelocity: { value: null }, uSource: { value: null },
        dyeTexelSize: { value: new THREE.Vector2() },
        dt: { value: 0.016 }, dissipation: { value: 1.0 },
      }
    );

    // UV tracking (simplified from original)
    this.uvMat = this._createMat(`
      uniform float dtRatio;
      uniform sampler2D tDiffuse;
      uniform sampler2D tVel;
      varying vec2 vUv;
      void main() {
        vec2 vel = texture2D(tVel, vUv).rg;
        vec4 prev = texture2D(tDiffuse, vUv);
        vec2 prevUV = prev.rg;
        vec2 prevVel = prev.ba;
        vec2 disp = vUv - prevUV;
        vec2 dispNor = clamp(normalize(disp), vec2(-1.0), vec2(1.0));
        float len = length(disp);
        prevVel += dispNor * (len * 0.03) * dtRatio;
        prevVel += vel * -0.00002 * dtRatio;
        prevVel *= exp2(log2(0.925) * dtRatio);
        prevUV += prevVel * dtRatio;
        gl_FragColor = vec4(prevUV, prevVel);
      }`,
      { dtRatio: { value: 1.0 }, tDiffuse: { value: null }, tVel: { value: null } }
    );

    // UV init
    this.uvInitMat = this._createMat(`
      varying vec2 vUv;
      void main() { gl_FragColor = vec4(vUv, 0.0, 0.0); }`, {});

    this.uvFBO = this._createDoubleFBO(this.dyeWidth, this.dyeHeight);
    // Initialize UV FBO
    this._blit(this.uvInitMat, this.uvFBO.read);
    this._blit(this.uvInitMat, this.uvFBO.write);
  }

  splat(x, y, dx, dy, radius) {
    const texelSim = new THREE.Vector2(1 / this.simWidth, 1 / this.simHeight);
    const texelDye = new THREE.Vector2(1 / this.dyeWidth, 1 / this.dyeHeight);
    const aspect = window.innerWidth / window.innerHeight;

    // Velocity splat
    this.splatMat.uniforms.texelSize.value = texelSim;
    this.splatMat.uniforms.uTarget.value = this.velocity.read.texture;
    this.splatMat.uniforms.aspectRatio.value = aspect;
    this.splatMat.uniforms.point.value.set(x, y);
    this.splatMat.uniforms.prevPoint.value.set(x - dx, y - dy);
    this.splatMat.uniforms.color.value.set(dx * 5000, dy * 5000, 0);
    this.splatMat.uniforms.radius.value = radius;
    this._blit(this.splatMat, this.velocity.write);
    this.velocity.swap();

    // Dye splat
    this.splatMat.uniforms.uTarget.value = this.dye.read.texture;
    this.splatMat.uniforms.color.value.set(0.8, 0.8, 0.8);
    this.splatMat.uniforms.radius.value = radius * 2;
    this._blit(this.splatMat, this.dye.write);
    this.dye.swap();
  }

  step(dt) {
    const texelSim = new THREE.Vector2(1 / this.simWidth, 1 / this.simHeight);
    const texelDye = new THREE.Vector2(1 / this.dyeWidth, 1 / this.dyeHeight);

    // Curl
    this.curlMat.uniforms.texelSize.value = texelSim;
    this.curlMat.uniforms.uVelocity.value = this.velocity.read.texture;
    this._blit(this.curlMat, this.curl_);

    // Vorticity
    this.vorticityMat.uniforms.texelSize.value = texelSim;
    this.vorticityMat.uniforms.uVelocity.value = this.velocity.read.texture;
    this.vorticityMat.uniforms.uCurl.value = this.curl_.texture;
    this.vorticityMat.uniforms.dt.value = dt;
    this._blit(this.vorticityMat, this.velocity.write);
    this.velocity.swap();

    // Divergence
    this.divergenceMat.uniforms.texelSize.value = texelSim;
    this.divergenceMat.uniforms.uVelocity.value = this.velocity.read.texture;
    this._blit(this.divergenceMat, this.divergence_);

    // Pressure solve (Jacobi iterations)
    for (let i = 0; i < 20; i++) {
      this.pressureMat.uniforms.texelSize.value = texelSim;
      this.pressureMat.uniforms.uPressure.value = this.pressure_.read.texture;
      this.pressureMat.uniforms.uDivergence.value = this.divergence_.texture;
      this._blit(this.pressureMat, this.pressure_.write);
      this.pressure_.swap();
    }

    // Gradient subtract
    this.gradSubMat.uniforms.texelSize.value = texelSim;
    this.gradSubMat.uniforms.uPressure.value = this.pressure_.read.texture;
    this.gradSubMat.uniforms.uVelocity.value = this.velocity.read.texture;
    this._blit(this.gradSubMat, this.velocity.write);
    this.velocity.swap();

    // Advect velocity
    this.advectMat.uniforms.texelSize.value = texelSim;
    this.advectMat.uniforms.dyeTexelSize.value = texelSim;
    this.advectMat.uniforms.uVelocity.value = this.velocity.read.texture;
    this.advectMat.uniforms.uSource.value = this.velocity.read.texture;
    this.advectMat.uniforms.dt.value = dt;
    this.advectMat.uniforms.dissipation.value = this.dissipation;
    this._blit(this.advectMat, this.velocity.write);
    this.velocity.swap();

    // Advect dye
    this.advectMat.uniforms.dyeTexelSize.value = texelDye;
    this.advectMat.uniforms.uSource.value = this.dye.read.texture;
    this.advectMat.uniforms.dissipation.value = this.dyeDissipation;
    this._blit(this.advectMat, this.dye.write);
    this.dye.swap();

    // UV field update
    this.uvMat.uniforms.texelSize.value = texelDye;
    this.uvMat.uniforms.tDiffuse.value = this.uvFBO.read.texture;
    this.uvMat.uniforms.tVel.value = this.velocity.read.texture;
    this.uvMat.uniforms.dtRatio.value = dt * 60;
    this._blit(this.uvMat, this.uvFBO.write);
    this.uvFBO.swap();
  }

  onMouseMove(x, y) {
    const nx = x / window.innerWidth;
    const ny = 1.0 - y / window.innerHeight;
    if (this.hasMoved) {
      const dx = nx - this.lastMouse.x;
      const dy = ny - this.lastMouse.y;
      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
        this.splat(nx, ny, dx, dy, 0.003);
      }
    }
    this.lastMouse.x = nx;
    this.lastMouse.y = ny;
    this.hasMoved = true;
  }
}


// ─────────────────────────────────────────────
// DL LOGO TEXTURE GENERATOR
// ─────────────────────────────────────────────

function createDLLogoTexture() {
  const size = 512;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');

  // Black background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);

  // Block grid for DL
  const bs = Math.floor(size * 0.065); // block size
  const gap = Math.floor(bs * 0.15);
  const stride = bs + gap;
  const radius = bs * 0.22;

  // D: 7 rows, 5 cols
  const D = [
    [0,0],[0,1],[0,2],[0,3],
    [1,0],[1,1],      [1,4],
    [2,0],            [2,4],
    [3,0],            [3,4],
    [4,0],            [4,4],
    [5,0],[5,1],      [5,4],
    [6,0],[6,1],[6,2],[6,3],
  ];

  // L: 7 rows, 4 cols
  const L = [
    [0,0],
    [1,0],
    [2,0],
    [3,0],
    [4,0],
    [5,0],
    [6,0],[6,1],[6,2],[6,3],
  ];

  const dCols = 5;
  const gapCols = 1;
  const lCols = 4;
  const totalCols = dCols + gapCols + lCols;
  const totalRows = 7;
  const tw = totalCols * stride - gap;
  const th = totalRows * stride - gap;
  const ox = (size - tw) / 2;
  const oy = (size - th) / 2;

  function drawBlock(row, col, colOffset) {
    const x = ox + (col + colOffset) * stride;
    const y = oy + row * stride;
    ctx.beginPath();
    ctx.roundRect(x, y, bs, bs, radius);
    ctx.fill();
  }

  // Draw in red channel (matching Yuga's logo.png format)
  ctx.fillStyle = '#ff0000';
  D.forEach(([r, c]) => drawBlock(r, c, 0));
  L.forEach(([r, c]) => drawBlock(r, c, dCols + gapCols));

  // Apply gaussian blur for SDF-like softness
  // Use multiple passes of CSS filter via temp canvas
  const blurCanvas = document.createElement('canvas');
  blurCanvas.width = size;
  blurCanvas.height = size;
  const bCtx = blurCanvas.getContext('2d');
  bCtx.filter = 'blur(6px)';
  bCtx.drawImage(c, 0, 0);

  // Second pass
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);
  ctx.filter = 'blur(3px)';
  ctx.drawImage(blurCanvas, 0, 0);

  const texture = new THREE.CanvasTexture(c);
  texture.needsUpdate = true;
  return texture;
}


// ─────────────────────────────────────────────
// MAIN SCENE
// ─────────────────────────────────────────────

(function init() {

  const container = document.getElementById('webgl');
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  container.appendChild(renderer.domElement);

  // Camera
  const camera = new THREE.Camera();
  camera.position.z = 1;

  // Scene
  const scene = new THREE.Scene();

  // Load BG SDF texture
  const loader = new THREE.TextureLoader();
  const bgTexture = loader.load('images/bg4.png', (tex) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
  });

  // Generate DL logo
  const logoTexture = createDLLogoTexture();

  // Fluid sim
  const fluid = new FluidSim(renderer, {
    simWidth: 128,
    simHeight: 128,
    dyeWidth: 512,
    dyeHeight: 512,
    curl: 20,
    dissipation: 0.97,
    dyeDissipation: 0.985,
  });

  // Pick a random noise type (like the original)
  const noiseTypes = [0, 1, 2, 3];
  const noiseType = noiseTypes[Math.floor(Math.random() * noiseTypes.length)];

  // Main fullscreen shader
  const mainMaterial = new THREE.ShaderMaterial({
    extensions: { derivatives: true },
    uniforms: {
      tBg: { value: bgTexture },
      tLogo: { value: logoTexture },
      uColorBg: { value: new THREE.Color('#000000') },
      uColorLogo: { value: new THREE.Color('#ffffff') },
      uNoise: { value: noiseType },
      uDye: { value: fluid.dye.read.texture },
      uVel: { value: fluid.velocity.read.texture },
      uUV: { value: fluid.uvFBO.read.texture },
      uNoise1Opts: { value: new THREE.Vector2(1.25, 0.25) },
      uNoise2Opts: { value: new THREE.Vector2(15.0, 0.35) },
      uNoise3Opts: { value: new THREE.Vector3(6.0, 0.4, 0.8) },
      uNoise4Opts: { value: new THREE.Vector4(6.0, 0.4, 0.5, 0.8) },
      uGlobalShape: { value: 1.0 },
      uGlobalOpen: { value: 0.0 },
      uNoiseMultiplier: { value: 1.0 },
      uLogoAnimation: { value: 0.0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      time: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColorBg;
      uniform vec2 resolution;
      uniform float uLogoAnimation;
      uniform vec3 uColorLogo;
      uniform float uNoise;
      uniform sampler2D tBg;
      uniform sampler2D uDye;
      uniform sampler2D uVel;
      uniform sampler2D tLogo;
      uniform sampler2D uUV;
      uniform vec2 uNoise1Opts;
      uniform vec2 uNoise2Opts;
      uniform vec3 uNoise3Opts;
      uniform vec4 uNoise4Opts;
      uniform float uGlobalShape;
      uniform float uGlobalOpen;
      uniform float uNoiseMultiplier;
      uniform float time;

      varying vec2 vUv;

      vec2 rotateUV(vec2 uv, float rotation, vec2 mid) {
        return vec2(
          cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
          cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
        );
      }

      vec2 scaleUV(vec2 uv, float scale, vec2 mid) {
        uv -= mid;
        uv *= 1.0 / scale;
        uv += mid;
        return uv;
      }

      float cubicInOut(float t) {
        return t < 0.5 ? 4.0 * t * t * t : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
      }

      float quadraticInOut(float t) {
        float p = 2.0 * t * t;
        return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
      }

      float quadraticOut(float t) {
        return -t * (t - 2.0);
      }

      float ft(float x, float a1, float a2, float b1, float b2) {
        return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
      }

      float fc(float x, float a1, float a2, float b1, float b2) {
        return clamp(ft(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));
      }

      float stp(float a, float b, float t) {
        return clamp((t - a) / (b - a), 0.0, 1.0);
      }

      float fl(float a, float b, float c, float f, float e) {
        float p = mix(b - f, c, e);
        return stp(p + f, p, a);
      }

      vec3 hash(vec3 p3) {
        p3 = fract(p3 * vec3(.1031, .1030, .0973));
        p3 += dot(p3, p3.yxz + 33.33);
        return fract((p3.xxy + p3.yxx) * p3.zyx) - 0.5;
      }

      vec2 hash22(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.xx + p3.yz) * p3.zy);
      }

      float noise(in vec3 p) {
        const float K1 = 0.333333333;
        const float K2 = 0.166666667;
        vec3 i = floor(p + (p.x + p.y + p.z) * K1);
        vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
        vec3 e = step(vec3(0.0), d0 - d0.yzx);
        vec3 i1 = e * (1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy * (1.0 - e);
        vec3 d1 = d0 - (i1 - 1.0 * K2);
        vec3 d2 = d0 - (i2 - 2.0 * K2);
        vec3 d3 = d0 - (1.0 - 3.0 * K2);
        vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
        vec4 n = h * h * h * h * vec4(dot(d0, hash(i)), dot(d1, hash(i + i1)), dot(d2, hash(i + i2)), dot(d3, hash(i + 1.0)));
        return dot(n, vec4(52.0));
      }

      float cellNoise(in vec2 uv, in float aspect) {
        uv -= 0.5;
        uv.x *= aspect;
        uv += 0.5;
        uv *= uNoise2Opts.x;
        vec2 i_st = floor(uv);
        vec2 f_st = fract(uv);
        float m_dist = 1.0;
        for (int y = -1; y <= 1; y++) {
          for (int x = -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = hash22(i_st + neighbor);
            point = 0.5 + 0.5 * sin(time * uNoise2Opts.y + 6.2831 * point);
            vec2 diff = neighbor + point - f_st;
            m_dist = min(m_dist, length(diff));
          }
        }
        return m_dist;
      }

      float linearNoise(in vec2 uv, in float aspect) {
        uv -= 0.5;
        uv.x *= aspect;
        uv += 0.5;
        uv = rotateUV(uv, uNoise3Opts.z, vec2(0.5));
        uv *= uNoise3Opts.x;
        return (sin(uv.x + time * uNoise3Opts.y) + 1.0) * 0.5;
      }

      float linearNoise2(in vec2 uv, in float aspect) {
        uv = rotateUV(uv, uNoise4Opts.z, vec2(0.5));
        vec2 multX = rotateUV(vec2(aspect + uNoise4Opts.w * aspect, 1.0), uNoise4Opts.z, vec2(0.0));
        uv -= 0.5;
        uv *= multX;
        float len = (sin(length(uv) * uNoise4Opts.x + time * uNoise4Opts.y) + 1.0) * 0.5;
        return len;
      }

      void main() {
        float ww = fwidth(vUv.y);
        float aspect = resolution.x / resolution.y;

        vec2 bgUV = texture2D(uUV, vUv).rg;

        vec2 vel = texture2D(uVel, bgUV).rg * -0.001 * uNoiseMultiplier;
        float dye = fc(quadraticOut(texture2D(uDye, bgUV).r), 0.01, 1.0, 0.0, 0.6);

        float n1 = 0.0;

        if (uNoise < 1.0) {
          n1 = quadraticInOut(fc(noise(vec3(bgUV * uNoise1Opts.x + 24.143, time * uNoise1Opts.y + 65.343)), -0.2, 0.7, 0.0, 0.6));
        } else if (uNoise < 2.0) {
          n1 = fc(cellNoise(vUv, aspect), 0.4, 0.8, 0.0, 0.6);
        } else if (uNoise < 3.0) {
          n1 = quadraticInOut(fc(linearNoise(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
        } else {
          n1 = quadraticInOut(fc(linearNoise2(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
        }

        n1 *= uNoiseMultiplier;

        // Logo
        vec2 uvLogo = bgUV;
        uvLogo -= 0.5;
        uvLogo.x *= aspect;
        uvLogo += 0.5;
        uvLogo = scaleUV(uvLogo, min(resolution.x, resolution.y) * 0.00025 + ww * 300.0, vec2(0.5));

        vec2 dLogo = 1.0 - texture2D(tLogo, uvLogo).rg;
        float borderLogo = ww + 0.0175;

        float logoDF = dLogo.r + n1;
        float shapeInside = fl(logoDF, 0.15, 1.0, borderLogo, fc(uLogoAnimation, 0.0, 1.0, 0.01, 0.85));
        vec3 bg = mix(uColorBg, uColorLogo, shapeInside);

        // Background grid
        vec2 uv = bgUV;
        uv -= 0.5;
        uv.x *= aspect;
        uv += 0.5;
        uv = scaleUV(uv, resolution.y * 0.00003 + ww * 20.0, vec2(0.5));

        float dist = 1.0 - texture2D(tBg, uv).r;

        float diff = 0.075;
        diff += n1;
        diff += uGlobalOpen;
        diff += dye * uNoiseMultiplier;
        diff *= uGlobalShape;

        float border = ww + 0.0175;
        float shape = fl(dist, 0.0, 1.0, border, fc(diff, 0.0, 1.0, 0.0, 1.0));

        vec3 colorFront = mix(uColorLogo, uColorBg, shapeInside * dye * 3.0);
        bg = mix(bg, colorFront, shape);

        gl_FragColor.rgb = bg;
        gl_FragColor.a = 1.0;
      }
    `,
    depthTest: false,
    depthWrite: false,
    transparent: false,
  });

  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mainMaterial);
  scene.add(quad);

  // ─── Animation ───
  let startTime = performance.now();
  let lastTime = startTime;
  let logoAnim = { value: 0 };

  // Animate logo entrance
  function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  }

  // Show header after delay
  setTimeout(() => {
    document.getElementById('header').classList.add('--visible');
  }, 1500);

  function onMouseMove(e) {
    fluid.onMouseMove(e.clientX, e.clientY);
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      fluid.onMouseMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mainMaterial.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('resize', onResize);

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    const dt = Math.min((now - lastTime) / 1000, 0.033);
    lastTime = now;

    // Logo entrance animation (0 to 1 over ~2 seconds, starting at 0.3s)
    const logoProgress = Math.max(0, Math.min(1, (elapsed - 0.3) / 2.0));
    mainMaterial.uniforms.uLogoAnimation.value = easeOutQuint(logoProgress);

    // Global shape animation (dots fade in)
    const shapeProgress = Math.max(0, Math.min(1, (elapsed - 0.1) / 1.5));
    mainMaterial.uniforms.uGlobalShape.value = easeOutQuint(shapeProgress);

    // Update time
    mainMaterial.uniforms.time.value = elapsed;

    // Step fluid
    fluid.step(dt);

    // Update fluid textures in main material
    mainMaterial.uniforms.uDye.value = fluid.dye.read.texture;
    mainMaterial.uniforms.uVel.value = fluid.velocity.read.texture;
    mainMaterial.uniforms.uUV.value = fluid.uvFBO.read.texture;

    // Render
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
  }

  animate();

})();
