/**
 * DONTAE LOPEZ — Yuga Labs style halftone WebGL
 *
 * This bypasses React entirely. We build the DOM + WebGL from scratch.
 * The .jsx extension is kept so Vite's entry point doesn't break.
 */

import {
  Camera, CanvasTexture, Color, HalfFloatType, LinearFilter,
  Mesh, NearestFilter, PlaneGeometry, RGBAFormat, RepeatWrapping,
  Scene, ShaderMaterial, TextureLoader, Vector2, Vector3, Vector4,
  WebGLRenderTarget, WebGLRenderer
} from 'three';
import './index.css';

// ═══════════════════════════════════════════════
//  DOM SETUP
// ═══════════════════════════════════════════════

const root = document.getElementById('root');
root.innerHTML = `
  <div class="webgl" id="webgl"></div>

  <!-- Page layer: sits over WebGL, holds page content -->
  <div class="page-layer" id="pageLayer">
    <!-- HOME (empty — the WebGL D logo IS the home page) -->
    <div class="page page--home --active" data-page="home"></div>

    <!-- ABOUT -->
    <div class="page page--about" data-page="about">
      <div class="page__inner">
        <section class="page__hero">
          <h1 class="page__title">
            <span class="line"><span class="line__inner">About</span></span>
          </h1>
        </section>
        <section class="page__content">
          <div class="page__grid">
            <div class="page__col page__col--label">
              <p class="page__label">Who</p>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">Dontae Lopez is an entrepreneur, researcher, and athlete.</p>
              <p class="page__paragraph">He is the CEO of <a href="https://threeum.com" target="_blank" rel="noopener noreferrer" class="page__link" style="font-weight:600">Threeum</a>. He is the Creative Director of Muerte Studio. He is a prospect athlete under Mission Twelve and a part of the Ground Zero series.</p>
              <p class="page__paragraph">He is originally from Colorado, born in Colorado Springs.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <p class="page__label">Focus</p>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">He is drawn to the hardest version of everything. The research that has no clear answer yet. The business that has no playbook. The sport that demands everything and negotiates nothing. The challenge is not a byproduct of the work. It is the point.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <p class="page__label">Philosophy</p>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">He believes the work speaks for itself if you let it. That means taking the time to get it right, resisting the pressure to move fast when the situation calls for patience, and holding the same standard whether anyone is watching or not. The domain does not matter. The discipline does.</p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- CONTACT -->
    <div class="page page--contact" data-page="contact">
      <div class="page__inner">
        <section class="page__hero">
          <h1 class="page__title">
            <span class="line"><span class="line__inner">Contact</span></span>
          </h1>
        </section>
        <section class="page__content">

          <!-- Tab navigation -->
          <div class="contact-tabs">
            <button class="contact-tab --active" data-tab="brand">Brand &amp; Partnerships</button>
            <button class="contact-tab" data-tab="business">Business &amp; Investments</button>
            <button class="contact-tab" data-tab="general">General Inquiries</button>
          </div>

          <!-- BRAND & PARTNERSHIPS -->
          <div class="contact-form-wrap --active" data-form="brand">
            <form class="contact-form" data-form-type="brand">
              <div class="form-row">
                <div class="form-field">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your name" required>
                </div>
                <div class="form-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="you@company.com" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Company / Brand</label>
                  <input type="text" name="company" placeholder="Brand or organization">
                </div>
                <div class="form-field">
                  <label>Budget Range</label>
                  <select name="budget">
                    <option value="" disabled selected>Select range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="open">Open to discussion</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field --full">
                  <label>Type of Opportunity</label>
                  <select name="type">
                    <option value="" disabled selected>Select one</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="creator">Creator Opportunity</option>
                    <option value="brand-deal">Brand Deal</option>
                    <option value="ambassador">Brand Ambassador</option>
                    <option value="content">Content Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field --full">
                  <label>Details</label>
                  <textarea name="message" rows="5" placeholder="Describe the opportunity, deliverables, and timeline."></textarea>
                </div>
              </div>
              <div class="form-row">
                <button type="submit" class="form-submit">Submit Proposal</button>
              </div>
            </form>
          </div>

          <!-- BUSINESS & INVESTMENTS -->
          <div class="contact-form-wrap" data-form="business">
            <form class="contact-form" data-form-type="business">
              <div class="form-row">
                <div class="form-field">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your name" required>
                </div>
                <div class="form-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="you@company.com" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Company / Organization</label>
                  <input type="text" name="company" placeholder="Company name">
                </div>
                <div class="form-field">
                  <label>Role</label>
                  <input type="text" name="role" placeholder="Your title">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field --full">
                  <label>Type of Inquiry</label>
                  <select name="type">
                    <option value="" disabled selected>Select one</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="threeum">Threeum Related</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="advisory">Advisory Role</option>
                    <option value="joint-venture">Joint Venture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field --full">
                  <label>Message</label>
                  <textarea name="message" rows="5" placeholder="Describe the opportunity, timeline, and any relevant context."></textarea>
                </div>
              </div>
              <div class="form-row">
                <button type="submit" class="form-submit">Submit Inquiry</button>
              </div>
            </form>
          </div>

          <!-- GENERAL INQUIRIES -->
          <div class="contact-form-wrap" data-form="general">
            <form class="contact-form" data-form-type="general">
              <div class="form-row">
                <div class="form-field">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your name" required>
                </div>
                <div class="form-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="you@email.com" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field --full">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="What is this regarding?">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field --full">
                  <label>Message</label>
                  <textarea name="message" rows="6" placeholder="Your message."></textarea>
                </div>
              </div>
              <div class="form-row">
                <button type="submit" class="form-submit">Send Message</button>
              </div>
            </form>
          </div>

        </section>
      </div>
    </div>
  </div>

  <!-- Header (persistent, always on top) -->
  <header class="header" id="header">
    <div class="header__el header__el--white">
      <ul class="header__nav header__nav--left">
        <li><a href="/" class="is-logo" data-nav="home">Dontae Lopez</a></li>
        <li class="header__socials">
          <a href="https://x.com/lopezdontae" target="_blank" rel="noopener noreferrer" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="https://www.instagram.com/lopezdontae" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="https://www.linkedin.com/in/dontaelopez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://tiktok.com/@DontaeLopez" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        </li>
      </ul>
      <ul class="header__nav header__nav--right nav-desktop">
        <li><a href="/" data-nav="home">Home</a></li>
        <li><a href="/about" data-nav="about">About</a></li>
        <li><a href="/contact" data-nav="contact">Contact</a></li>
      </ul>
      <ul class="header__nav header__nav--right nav-mobile">
        <li><a href="javascript:void(0)" id="menuToggle">Menu</a></li>
      </ul>
    </div>
  </header>

  <!-- Mobile menu overlay -->
  <div class="mobile-menu" id="mobileMenu">
    <nav class="mobile-menu__nav">
      <a href="/" data-nav="home" class="mobile-menu__link">Home</a>
      <a href="/about" data-nav="about" class="mobile-menu__link">About</a>
      <a href="/contact" data-nav="contact" class="mobile-menu__link">Contact</a>
    </nav>
  </div>
`;


// ═══════════════════════════════════════════════
//  PAGE ROUTER + TRANSITIONS
// ═══════════════════════════════════════════════

let currentPage = 'home';
let isTransitioning = false;

function navigateTo(pageName) {
  if (pageName === currentPage || isTransitioning) return;
  isTransitioning = true;

  // Close mobile menu if open
  closeMobileMenu();

  const leaving = document.querySelector(`.page[data-page="${currentPage}"]`);
  const entering = document.querySelector(`.page[data-page="${pageName}"]`);
  if (!entering) { isTransitioning = false; return; }

  const goingToContent = pageName !== 'home';
  const leavingContent = currentPage !== 'home';

  // Remove active from leaving page
  leaving.classList.remove('--active');

  if (goingToContent) {
    // Set white theme for content pages
    document.documentElement.style.setProperty('--background', '#fff');
    document.documentElement.style.setProperty('--color', '#000');

    // Clear any inline styles from previous visits
    entering.querySelectorAll('.line__inner').forEach(el => el.removeAttribute('style'));
    entering.querySelectorAll('.page__grid').forEach(el => el.removeAttribute('style'));

    // Remove --active so CSS resets to hidden state
    entering.classList.remove('--active');
    void entering.offsetHeight; // force reflow

    setTimeout(() => {
      entering.classList.add('--active');
      currentPage = pageName;
      setTimeout(() => { isTransitioning = false; }, 600);
    }, leavingContent ? 150 : 50);

  } else {
    // CONTENT → HOME
    setTimeout(() => {
      document.documentElement.style.setProperty('--background', '#000');
      document.documentElement.style.setProperty('--color', '#fff');
      entering.classList.add('--active');
      currentPage = pageName;
      isTransitioning = false;
    }, 400);
  }
}

// Mobile menu
let menuOpen = false;
function openMobileMenu() {
  menuOpen = true;
  document.getElementById('mobileMenu').classList.add('--open');
  document.getElementById('menuToggle').textContent = 'Close';
}
function closeMobileMenu() {
  menuOpen = false;
  document.getElementById('mobileMenu').classList.remove('--open');
  document.getElementById('menuToggle').textContent = 'Menu';
}
document.getElementById('menuToggle').addEventListener('click', (e) => {
  e.preventDefault();
  menuOpen ? closeMobileMenu() : openMobileMenu();
});

// (uniform animations handled by entrance timeline below)

// Nav click handlers
document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.nav);
  });
});

// ═══════════════════════════════════════════════
//  CONTACT TABS + FORMS
// ═══════════════════════════════════════════════

document.querySelectorAll('.contact-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    // Switch active tab
    document.querySelectorAll('.contact-tab').forEach(t => t.classList.remove('--active'));
    tab.classList.add('--active');
    // Switch active form
    document.querySelectorAll('.contact-form-wrap').forEach(f => f.classList.remove('--active'));
    const form = document.querySelector(`.contact-form-wrap[data-form="${target}"]`);
    if (form) form.classList.add('--active');
  });
});

// Form submission via Formsubmit.co (email obfuscated to prevent bot scraping)
const _e = [100,111,110,116,97,101,108,111,112,101,122,64,112,114,111,116,111,110,109,97,105,108,46,99,111,109];
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + _e.map(c => String.fromCharCode(c)).join('');

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const formType = form.dataset.formType;
    const data = new FormData(form);
    data.append('_subject', `[dontaelopez.com] ${formType} inquiry`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.append('Form Type', formType);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data,
    })
    .then(res => res.json())
    .then(() => {
      btn.textContent = 'Sent';
      btn.classList.add('--sent');
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('--sent');
        btn.disabled = false;
      }, 3000);
    })
    .catch(() => {
      btn.textContent = 'Error — try again';
      btn.disabled = false;
      setTimeout(() => { btn.textContent = originalText; }, 3000);
    });
  });
});

// ═══════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════

function createFBO(w, h, type) {
  return new WebGLRenderTarget(w, h, {
    minFilter: type || LinearFilter,
    magFilter: type || LinearFilter,
    format: RGBAFormat,
    type: HalfFloatType,
    depthBuffer: false,
    stencilBuffer: false,
  });
}

function createDoubleFBO(w, h, type) {
  return {
    read: createFBO(w, h, type),
    write: createFBO(w, h, type),
    swap() { const t = this.read; this.read = this.write; this.write = t; },
  };
}

// Shared fullscreen triangle
const fsTriVert = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fluidVert = `
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform vec2 texelSize;
  void main() {
    vUv = uv;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(position, 1.0);
  }
`;

const fsQuadGeom = new PlaneGeometry(2, 2);
const blitCam = new Camera();
blitCam.position.z = 1;

function blit(renderer, material, target) {
  const mesh = new Mesh(fsQuadGeom, material);
  const scene = new Scene();
  scene.add(mesh);
  renderer.setRenderTarget(target || null);
  renderer.render(scene, blitCam);
  renderer.setRenderTarget(null);
}

function makeMat(frag, uniforms, vert) {
  return new ShaderMaterial({
    vertexShader: vert || fluidVert,
    fragmentShader: frag,
    uniforms: Object.assign({ texelSize: { value: new Vector2() } }, uniforms),
    depthTest: false,
    depthWrite: false,
  });
}


// ═══════════════════════════════════════════════
//  D LOGO TEXTURE — distinctive pixel-block D
// ═══════════════════════════════════════════════

function createLogoTexture() {
  const size = 512;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);

  // Same proportions as Yuga Y: chunky blocks, tight gaps
  const bs = Math.floor(size * 0.078);
  const gap = Math.floor(bs * 0.13);
  const stride = bs + gap;
  const r = bs * 0.28;

  // Bold D — 7 rows x 6 cols, 21 blocks
  // Thick top/bottom bars (4 wide), chunky shoulder transitions,
  // wide belly reaching col 5. Distinctive, heavy, architectural.
  //
  //   ██ ██ ██ ██ ░░ ░░     top bar
  //   ██ ██ ░░ ░░ ██ ░░     thick left + shoulder
  //   ██ ░░ ░░ ░░ ░░ ██     belly
  //   ██ ░░ ░░ ░░ ░░ ██     belly
  //   ██ ░░ ░░ ░░ ░░ ██     belly
  //   ██ ██ ░░ ░░ ██ ░░     thick left + shoulder
  //   ██ ██ ██ ██ ░░ ░░     bottom bar
  //
  const blocks = [
    [0,0],[0,1],[0,2],[0,3],
    [1,0],[1,1],            [1,4],
    [2,0],                        [2,5],
    [3,0],                        [3,5],
    [4,0],                        [4,5],
    [5,0],[5,1],            [5,4],
    [6,0],[6,1],[6,2],[6,3],
  ];

  const totalCols = 6;
  const totalRows = 7;
  const tw = totalCols * stride - gap;
  const th = totalRows * stride - gap;
  const ox = (size - tw) / 2;
  const oy = (size - th) / 2;

  ctx.fillStyle = '#ff0000';
  blocks.forEach(([row, col]) => {
    const x = ox + col * stride;
    const y = oy + row * stride;
    ctx.beginPath();
    ctx.roundRect(x, y, bs, bs, r);
    ctx.fill();
  });

  // Two-pass blur for smooth SDF (matches Yuga logo.png)
  const tmp = document.createElement('canvas');
  tmp.width = size; tmp.height = size;
  const tctx = tmp.getContext('2d');

  tctx.filter = 'blur(10px)';
  tctx.drawImage(c, 0, 0);

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);
  ctx.filter = 'blur(5px)';
  ctx.drawImage(tmp, 0, 0);

  const tex = new CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}


// ═══════════════════════════════════════════════
//  FLUID SIMULATION
// ═══════════════════════════════════════════════

const SIM_W = 128, SIM_H = 128;
const DYE_W = 512, DYE_H = 512;

let velocity, pressure, divergence, curl, dye, uvField;

function initFluid(renderer) {
  velocity = createDoubleFBO(SIM_W, SIM_H);
  pressure = createDoubleFBO(SIM_W, SIM_H);
  divergence = createFBO(SIM_W, SIM_H, NearestFilter);
  curl = createFBO(SIM_W, SIM_H, NearestFilter);
  dye = createDoubleFBO(DYE_W, DYE_H);
  uvField = createDoubleFBO(DYE_W, DYE_H);

  // Init UV field to identity
  const uvInitMat = makeMat(`
    varying vec2 vUv;
    void main() { gl_FragColor = vec4(vUv, 0.0, 0.0); }
  `, {}, fsTriVert);
  blit(renderer, uvInitMat, uvField.read);
  blit(renderer, uvInitMat, uvField.write);
}

// Splat material
const splatMat = makeMat(`
  uniform sampler2D uTarget;
  uniform float aspectRatio;
  uniform vec3 color;
  uniform vec2 point;
  uniform vec2 prevPoint;
  uniform float radius;
  uniform bool isDye;
  varying vec2 vUv;
  float line2(vec2 uv, vec2 p1, vec2 p2) {
    vec2 pa = uv - p1, ba = p2 - p1;
    pa.x *= aspectRatio; ba.x *= aspectRatio;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }
  float cubicIn(float t) { return t * t * t; }
  void main() {
    vec3 s = cubicIn(clamp(1.0 - line2(vUv, prevPoint, point) / radius, 0.0, 1.0)) * color;
    vec3 base = texture2D(uTarget, vUv).rgb;
    vec3 result = base + s;
    if (isDye) result = clamp(result, vec3(0.0), vec3(1.0));
    gl_FragColor = vec4(result, 1.0);
  }
`, {
  uTarget: { value: null }, aspectRatio: { value: 1.0 },
  color: { value: new Vector3() },
  point: { value: new Vector2() }, prevPoint: { value: new Vector2() },
  radius: { value: 0.0 }, isDye: { value: false },
});

// Curl
const curlMat = makeMat(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
  }
`, { uVelocity: { value: null } });

// Vorticity
const vorticityMat = makeMat(`
  uniform sampler2D uVelocity;
  uniform sampler2D uCurl;
  uniform float curlAmount;
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
    force *= curlAmount * C;
    force.y *= -1.0;
    vec2 vel = texture2D(uVelocity, vUv).xy;
    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
  }
`, { uVelocity: { value: null }, uCurl: { value: null }, curlAmount: { value: 0.001 }, dt: { value: 0.016 } });

// Divergence
const divMat = makeMat(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
  }
`, { uVelocity: { value: null } });

// Pressure
const pressureMat = makeMat(`
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float div = texture2D(uDivergence, vUv).x;
    gl_FragColor = vec4((L + R + B + T - div) * 0.25, 0.0, 0.0, 1.0);
  }
`, { uPressure: { value: null }, uDivergence: { value: null } });

// Gradient subtract
const gradSubMat = makeMat(`
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
  }
`, { uPressure: { value: null }, uVelocity: { value: null } });

// Advection
const advectMat = makeMat(`
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 texelSize;
  uniform float dt;
  uniform float dissipation;
  varying vec2 vUv;
  void main() {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    gl_FragColor = texture2D(uSource, coord) * dissipation;
    gl_FragColor.a = 1.0;
  }
`, { uVelocity: { value: null }, uSource: { value: null }, dt: { value: 0.016 }, dissipation: { value: 1.0 } });

// UV tracking
const uvMat = makeMat(`
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
  }
`, { dtRatio: { value: 1.0 }, tDiffuse: { value: null }, tVel: { value: null } });

const simTexel = new Vector2(1 / SIM_W, 1 / SIM_H);
const dyeTexel = new Vector2(1 / DYE_W, 1 / DYE_H);

function splatFluid(renderer, x, y, dx, dy) {
  const aspect = window.innerWidth / window.innerHeight;

  // Velocity splat
  splatMat.uniforms.texelSize.value = simTexel;
  splatMat.uniforms.uTarget.value = velocity.read.texture;
  splatMat.uniforms.aspectRatio.value = aspect;
  splatMat.uniforms.point.value.set(x, y);
  splatMat.uniforms.prevPoint.value.set(x - dx, y - dy);
  splatMat.uniforms.color.value.set(dx * 500, dy * 500, 0);
  splatMat.uniforms.radius.value = 0.25;
  splatMat.uniforms.isDye.value = false;
  blit(renderer, splatMat, velocity.write);
  velocity.swap();

  // Dye splat — same wide radius
  splatMat.uniforms.uTarget.value = dye.read.texture;
  splatMat.uniforms.color.value.set(0.8, 0.8, 0.8);
  splatMat.uniforms.radius.value = 0.25;
  splatMat.uniforms.isDye.value = true;
  blit(renderer, splatMat, dye.write);
  dye.swap();
}

function stepFluid(renderer, dt) {
  // Curl
  curlMat.uniforms.texelSize.value = simTexel;
  curlMat.uniforms.uVelocity.value = velocity.read.texture;
  blit(renderer, curlMat, curl);

  // Vorticity confinement
  vorticityMat.uniforms.texelSize.value = simTexel;
  vorticityMat.uniforms.uVelocity.value = velocity.read.texture;
  vorticityMat.uniforms.uCurl.value = curl.texture;
  vorticityMat.uniforms.dt.value = dt;
  blit(renderer, vorticityMat, velocity.write);
  velocity.swap();

  // Divergence
  divMat.uniforms.texelSize.value = simTexel;
  divMat.uniforms.uVelocity.value = velocity.read.texture;
  blit(renderer, divMat, divergence);

  // Pressure solve (Jacobi iterations)
  for (let i = 0; i < 2; i++) {
    pressureMat.uniforms.texelSize.value = simTexel;
    pressureMat.uniforms.uPressure.value = pressure.read.texture;
    pressureMat.uniforms.uDivergence.value = divergence.texture;
    blit(renderer, pressureMat, pressure.write);
    pressure.swap();
  }

  // Gradient subtract
  gradSubMat.uniforms.texelSize.value = simTexel;
  gradSubMat.uniforms.uPressure.value = pressure.read.texture;
  gradSubMat.uniforms.uVelocity.value = velocity.read.texture;
  blit(renderer, gradSubMat, velocity.write);
  velocity.swap();

  // Advect velocity
  advectMat.uniforms.texelSize.value = simTexel;
  advectMat.uniforms.uVelocity.value = velocity.read.texture;
  advectMat.uniforms.uSource.value = velocity.read.texture;
  advectMat.uniforms.dt.value = dt;
  advectMat.uniforms.dissipation.value = 0.97;
  blit(renderer, advectMat, velocity.write);
  velocity.swap();

  // Advect dye
  advectMat.uniforms.texelSize.value = dyeTexel;
  advectMat.uniforms.uVelocity.value = velocity.read.texture;
  advectMat.uniforms.uSource.value = dye.read.texture;
  advectMat.uniforms.dissipation.value = 0.93;
  blit(renderer, advectMat, dye.write);
  dye.swap();

  // UV field
  uvMat.uniforms.texelSize.value = dyeTexel;
  uvMat.uniforms.tDiffuse.value = uvField.read.texture;
  uvMat.uniforms.tVel.value = velocity.read.texture;
  uvMat.uniforms.dtRatio.value = dt * 60;
  blit(renderer, uvMat, uvField.write);
  uvField.swap();
}


// ═══════════════════════════════════════════════
//  MAIN COMPOSITE SHADER (from Yuga source)
// ═══════════════════════════════════════════════

const compositeShader = `
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
  float quadraticOut(float t) { return -t * (t - 2.0); }

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
    uv -= 0.5; uv.x *= aspect; uv += 0.5;
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
    uv -= 0.5; uv.x *= aspect; uv += 0.5;
    uv = rotateUV(uv, uNoise3Opts.z, vec2(0.5));
    uv *= uNoise3Opts.x;
    return (sin(uv.x + time * uNoise3Opts.y) + 1.0) * 0.5;
  }

  float linearNoise2(in vec2 uv, in float aspect) {
    uv = rotateUV(uv, uNoise4Opts.z, vec2(0.5));
    vec2 multX = rotateUV(vec2(aspect + uNoise4Opts.w * aspect, 1.0), uNoise4Opts.z, vec2(0.0));
    uv -= 0.5; uv *= multX;
    return (sin(length(uv) * uNoise4Opts.x + time * uNoise4Opts.y) + 1.0) * 0.5;
  }

  void main() {
    float ww = fwidth(vUv.y);
    float aspect = resolution.x / resolution.y;

    vec2 bgUV = texture2D(uUV, vUv).rg;

    vec2 vel = texture2D(uVel, bgUV).rg * -0.001 * uNoiseMultiplier;
    float dye = fc(quadraticOut(texture2D(uDye, bgUV).r), 0.005, 0.8, 0.0, 0.8);

    // Exact Yuga noise — one of 4 types, randomly selected each visit
    float n1 = 0.0;
    if (uNoise < 1.0) {
      // Type 0: Simplex — organic flowing bands
      n1 = quadraticInOut(fc(noise(vec3(bgUV * uNoise1Opts.x + 24.143, time * uNoise1Opts.y + 65.343)), -0.2, 0.7, 0.0, 0.6));
    } else if (uNoise < 2.0) {
      // Type 1: Voronoi cells — animated cellular patterns
      n1 = fc(cellNoise(vUv, aspect), 0.4, 0.8, 0.0, 0.6);
    } else if (uNoise < 3.0) {
      // Type 2: Linear sweep — diagonal bands
      n1 = quadraticInOut(fc(linearNoise(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
    } else {
      // Type 3: Radial waves — expanding concentric rings
      n1 = quadraticInOut(fc(linearNoise2(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
    }
    n1 *= uNoiseMultiplier;

    /* Logo */
    vec2 uvLogo = bgUV;
    uvLogo -= 0.5; uvLogo.x *= aspect; uvLogo += 0.5;
    uvLogo = scaleUV(uvLogo, min(resolution.x, resolution.y) * 0.00038 + ww * 300.0, vec2(0.5));

    vec2 dLogo = 1.0 - texture2D(tLogo, uvLogo).rg;
    float borderLogo = ww + 0.0175;
    float logoDF = dLogo.r + n1;
    float shapeInside = fl(logoDF, 0.15, 1.0, borderLogo, fc(uLogoAnimation, 0.0, 1.0, 0.01, 0.85));
    vec3 bg = mix(uColorBg, uColorLogo, shapeInside);

    /* Background dot grid */
    vec2 uv = bgUV;
    uv -= 0.5; uv.x *= aspect; uv += 0.5;
    uv = scaleUV(uv, resolution.y * 0.00004 + ww * 20.0, vec2(0.5));

    float dist = 1.0 - texture2D(tBg, uv).r;

    // Exact Yuga values
    float diff = 0.075;
    diff += n1;
    diff += uGlobalOpen;
    diff += dye * uNoiseMultiplier;
    diff *= uGlobalShape;

    float border = ww + 0.0175;
    float shape = fl(dist, 0.0, 1.0, border, fc(diff, 0.0, 1.0, 0.0, 1.0));

    vec3 colorFront = mix(uColorLogo, uColorBg, shapeInside * dye * 4.0);
    bg = mix(bg, colorFront, shape);

    gl_FragColor.rgb = bg;
    gl_FragColor.a = 1.0;
  }
`;


// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════

const container = document.getElementById('webgl');
const renderer = new WebGLRenderer({ antialias: false, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;
container.appendChild(renderer.domElement);

const scene = new Scene();
const camera = new Camera();
camera.position.z = 1;

// Load textures
const loader = new TextureLoader();
const bgTexture = loader.load('/images/bg4.png', (tex) => {
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.minFilter = LinearFilter;
  tex.magFilter = LinearFilter;
});

const logoTexture = createLogoTexture();

// Init fluid
initFluid(renderer);

// Pick random noise
const noiseType = [0, 1, 2, 3][Math.floor(Math.random() * 4)];

// Composite material
const mainMat = new ShaderMaterial({
  extensions: { derivatives: true },
  vertexShader: fsTriVert,
  fragmentShader: compositeShader,
  uniforms: {
    tBg: { value: bgTexture },
    tLogo: { value: logoTexture },
    uColorBg: { value: new Color('#000000') },
    uColorLogo: { value: new Color('#ffffff') },
    uNoise: { value: noiseType },
    uDye: { value: null },
    uVel: { value: null },
    uUV: { value: null },
    uNoise1Opts: { value: new Vector2(1.25, 0.25) },
    uNoise2Opts: { value: new Vector2(2.0, 0.8) },
    uNoise3Opts: { value: new Vector3(5.0, 2.0, 3.8) },
    uNoise4Opts: { value: new Vector4(-3.8, -2.0, -3.9, -2.5) },
    uGlobalShape: { value: 0.0 },
    uGlobalOpen: { value: 0.0 },
    uNoiseMultiplier: { value: 0.0 },
    uLogoAnimation: { value: 0.0 },
    resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
    time: { value: 0 },
  },
  depthTest: false, depthWrite: false, transparent: false,
});

scene.add(new Mesh(new PlaneGeometry(2, 2), mainMat));


// ═══════════════════════════════════════════════
//  MOUSE
// ═══════════════════════════════════════════════

let lastMouse = { x: 0, y: 0, hasMoved: false };

window.addEventListener('mousemove', (e) => {
  const nx = e.clientX / window.innerWidth;
  const ny = 1.0 - e.clientY / window.innerHeight;
  if (lastMouse.hasMoved) {
    const dx = nx - lastMouse.x;
    const dy = ny - lastMouse.y;
    if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
      splatFluid(renderer, nx, ny, dx, dy);
    }
  }
  lastMouse.x = nx;
  lastMouse.y = ny;
  lastMouse.hasMoved = true;
});

window.addEventListener('touchmove', (e) => {
  if (e.touches.length) {
    const t = e.touches[0];
    const nx = t.clientX / window.innerWidth;
    const ny = 1.0 - t.clientY / window.innerHeight;
    if (lastMouse.hasMoved) {
      const dx = nx - lastMouse.x;
      const dy = ny - lastMouse.y;
      splatFluid(renderer, nx, ny, dx, dy);
    }
    lastMouse.x = nx;
    lastMouse.y = ny;
    lastMouse.hasMoved = true;
  }
}, { passive: true });

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  mainMat.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
});


// ═══════════════════════════════════════════════
//  ANIMATION LOOP
// ═══════════════════════════════════════════════

function easeOutQuint(t) { return 1 - Math.pow(1 - t, 5); }

const startTime = performance.now();
let prevTime = startTime;

// Entrance: WebGL zooms in, header slides up
setTimeout(() => {
  document.getElementById('webgl').classList.add('--visible');
}, 100);
setTimeout(() => {
  document.getElementById('header').classList.add('--visible');
}, 1250);

function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  const elapsed = (now - startTime) / 1000;
  const dt = Math.min((now - prevTime) / 1000, 0.033);
  prevTime = now;

  // Entrance animations — matches Yuga GSAP timeline:
  // Logo: starts at 0s, 1.5s duration, ease "io"
  // Shape + noise: start at 0.75s, 1.75s duration, ease power2.inOut
  const logoT = easeOutQuint(Math.min(1, Math.max(0, elapsed / 1.5)));
  const shapeT = easeOutQuint(Math.min(1, Math.max(0, (elapsed - 0.75) / 1.75)));
  const noiseT = easeOutQuint(Math.min(1, Math.max(0, (elapsed - 0.75) / 1.75)));

  mainMat.uniforms.uGlobalShape.value = shapeT;
  mainMat.uniforms.uNoiseMultiplier.value = noiseT;
  mainMat.uniforms.uLogoAnimation.value = logoT;
  mainMat.uniforms.time.value = elapsed;

  // Step fluid simulation
  stepFluid(renderer, dt);

  // Update composite textures
  mainMat.uniforms.uDye.value = dye.read.texture;
  mainMat.uniforms.uVel.value = velocity.read.texture;
  mainMat.uniforms.uUV.value = uvField.read.texture;

  // Render final composite
  renderer.setRenderTarget(null);
  renderer.render(scene, camera);
}

animate();
