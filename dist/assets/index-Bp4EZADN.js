import{P as j,C as $,W as ye,S as K,T as be,R as k,L as z,a as X,V as f,b as xe,c as Q,d as q,M as J,e as we,f as _e,H as Te,g as Le,N as W}from"./three-BUAgunp6.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();const De=document.getElementById("root");De.innerHTML=`
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
`;let b="home",x=!1;function Se(e){if(e===b||x)return;x=!0,Z();const a=document.querySelector(`.page[data-page="${b}"]`),t=document.querySelector(`.page[data-page="${e}"]`);if(!t){x=!1;return}const i=e!=="home",o=b!=="home";a.classList.remove("--active"),i?(document.documentElement.style.setProperty("--background","#fff"),document.documentElement.style.setProperty("--color","#000"),t.querySelectorAll(".line__inner").forEach(l=>l.removeAttribute("style")),t.querySelectorAll(".page__grid").forEach(l=>l.removeAttribute("style")),t.classList.remove("--active"),t.offsetHeight,setTimeout(()=>{t.classList.add("--active"),b=e,setTimeout(()=>{x=!1},600)},o?150:50)):setTimeout(()=>{document.documentElement.style.setProperty("--background","#000"),document.documentElement.style.setProperty("--color","#fff"),t.classList.add("--active"),b=e,x=!1},400)}let F=!1;function Ce(){F=!0,document.getElementById("mobileMenu").classList.add("--open"),document.getElementById("menuToggle").textContent="Close"}function Z(){F=!1,document.getElementById("mobileMenu").classList.remove("--open"),document.getElementById("menuToggle").textContent="Menu"}document.getElementById("menuToggle").addEventListener("click",e=>{e.preventDefault(),F?Z():Ce()});document.querySelectorAll("[data-nav]").forEach(e=>{e.addEventListener("click",a=>{a.preventDefault(),Se(e.dataset.nav)})});document.querySelectorAll(".contact-tab").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.tab;document.querySelectorAll(".contact-tab").forEach(i=>i.classList.remove("--active")),e.classList.add("--active"),document.querySelectorAll(".contact-form-wrap").forEach(i=>i.classList.remove("--active"));const t=document.querySelector(`.contact-form-wrap[data-form="${a}"]`);t&&t.classList.add("--active")})});const Ve=[100,111,110,116,97,101,108,111,112,101,122,64,112,114,111,116,111,110,109,97,105,108,46,99,111,109],Me="https://formsubmit.co/ajax/"+Ve.map(e=>String.fromCharCode(e)).join("");document.querySelectorAll(".contact-form").forEach(e=>{e.addEventListener("submit",a=>{a.preventDefault();const t=e.querySelector(".form-submit"),i=t.textContent;t.textContent="Sending...",t.disabled=!0;const o=e.dataset.formType,l=new FormData(e);l.append("_subject",`[dontaelopez.com] ${o} inquiry`),l.append("_template","table"),l.append("_captcha","false"),l.append("Form Type",o),fetch(Me,{method:"POST",headers:{Accept:"application/json"},body:l}).then(g=>g.json()).then(()=>{t.textContent="Sent",t.classList.add("--sent"),e.reset(),setTimeout(()=>{t.textContent=i,t.classList.remove("--sent"),t.disabled=!1},3e3)}).catch(()=>{t.textContent="Error — try again",t.disabled=!1,setTimeout(()=>{t.textContent=i},3e3)})})});function R(e,a,t){return new _e(e,a,{minFilter:t||z,magFilter:t||z,format:Le,type:Te,depthBuffer:!1,stencilBuffer:!1})}function C(e,a,t){return{read:R(e,a,t),write:R(e,a,t),swap(){const i=this.read;this.read=this.write,this.write=i}}}const ee=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,ze=`
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
`,Re=new j(2,2),te=new $;te.position.z=1;function s(e,a,t){const i=new J(Re,a),o=new K;o.add(i),e.setRenderTarget(t||null),e.render(o,te),e.setRenderTarget(null)}function p(e,a,t){return new X({vertexShader:t||ze,fragmentShader:e,uniforms:Object.assign({texelSize:{value:new f}},a),depthTest:!1,depthWrite:!1})}function Ue(){const a=document.createElement("canvas");a.width=512,a.height=512;const t=a.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,512);const i=Math.floor(512*.078),o=Math.floor(i*.13),l=i+o,g=i*.28,ne=[[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,4],[2,0],[2,5],[3,0],[3,5],[4,0],[4,5],[5,0],[5,1],[5,4],[6,0],[6,1],[6,2],[6,3]],se=6,ue=7,ce=se*l-o,ve=ue*l-o,de=(512-ce)/2,pe=(512-ve)/2;t.fillStyle="#ff0000",ne.forEach(([fe,me])=>{const ge=de+me*l,he=pe+fe*l;t.beginPath(),t.roundRect(ge,he,i,i,g),t.fill()});const S=document.createElement("canvas");S.width=512,S.height=512;const H=S.getContext("2d");H.filter="blur(10px)",H.drawImage(a,0,0),t.clearRect(0,0,512,512),t.fillStyle="#000",t.fillRect(0,0,512,512),t.filter="blur(5px)",t.drawImage(S,0,0);const A=new we(a);return A.needsUpdate=!0,A}const T=128,L=128,N=512,E=512;let r,D,P,I,m,y;function Be(e){r=C(T,L),D=C(T,L),P=R(T,L,W),I=R(T,L,W),m=C(N,E),y=C(N,E);const a=p(`
    varying vec2 vUv;
    void main() { gl_FragColor = vec4(vUv, 0.0, 0.0); }
  `,{},ee);s(e,a,y.read),s(e,a,y.write)}const n=p(`
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
`,{uTarget:{value:null},aspectRatio:{value:1},color:{value:new Q},point:{value:new f},prevPoint:{value:new f},radius:{value:0},isDye:{value:!1}}),U=p(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
  }
`,{uVelocity:{value:null}}),w=p(`
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
`,{uVelocity:{value:null},uCurl:{value:null},curlAmount:{value:.001},dt:{value:.016}}),B=p(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
  }
`,{uVelocity:{value:null}}),V=p(`
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
`,{uPressure:{value:null},uDivergence:{value:null}}),M=p(`
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
`,{uPressure:{value:null},uVelocity:{value:null}}),v=p(`
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
`,{uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1}}),_=p(`
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
`,{dtRatio:{value:1},tDiffuse:{value:null},tVel:{value:null}}),h=new f(1/T,1/L),G=new f(1/N,1/E);function ae(e,a,t,i,o){const l=window.innerWidth/window.innerHeight;n.uniforms.texelSize.value=h,n.uniforms.uTarget.value=r.read.texture,n.uniforms.aspectRatio.value=l,n.uniforms.point.value.set(a,t),n.uniforms.prevPoint.value.set(a-i,t-o),n.uniforms.color.value.set(i*500,o*500,0),n.uniforms.radius.value=.25,n.uniforms.isDye.value=!1,s(e,n,r.write),r.swap(),n.uniforms.uTarget.value=m.read.texture,n.uniforms.color.value.set(.8,.8,.8),n.uniforms.radius.value=.25,n.uniforms.isDye.value=!0,s(e,n,m.write),m.swap()}function Oe(e,a){U.uniforms.texelSize.value=h,U.uniforms.uVelocity.value=r.read.texture,s(e,U,I),w.uniforms.texelSize.value=h,w.uniforms.uVelocity.value=r.read.texture,w.uniforms.uCurl.value=I.texture,w.uniforms.dt.value=a,s(e,w,r.write),r.swap(),B.uniforms.texelSize.value=h,B.uniforms.uVelocity.value=r.read.texture,s(e,B,P);for(let t=0;t<2;t++)V.uniforms.texelSize.value=h,V.uniforms.uPressure.value=D.read.texture,V.uniforms.uDivergence.value=P.texture,s(e,V,D.write),D.swap();M.uniforms.texelSize.value=h,M.uniforms.uPressure.value=D.read.texture,M.uniforms.uVelocity.value=r.read.texture,s(e,M,r.write),r.swap(),v.uniforms.texelSize.value=h,v.uniforms.uVelocity.value=r.read.texture,v.uniforms.uSource.value=r.read.texture,v.uniforms.dt.value=a,v.uniforms.dissipation.value=.97,s(e,v,r.write),r.swap(),v.uniforms.texelSize.value=G,v.uniforms.uVelocity.value=r.read.texture,v.uniforms.uSource.value=m.read.texture,v.uniforms.dissipation.value=.93,s(e,v,m.write),m.swap(),_.uniforms.texelSize.value=G,_.uniforms.tDiffuse.value=y.read.texture,_.uniforms.tVel.value=r.read.texture,_.uniforms.dtRatio.value=a*60,s(e,_,y.write),y.swap()}const Ne=`
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
`,Ee=document.getElementById("webgl"),c=new ye({antialias:!1,alpha:!1});c.setPixelRatio(Math.min(window.devicePixelRatio,2));c.setSize(window.innerWidth,window.innerHeight);c.autoClear=!1;Ee.appendChild(c.domElement);const oe=new K,ie=new $;ie.position.z=1;const Pe=new be,Ie=Pe.load("/images/bg4.png",e=>{e.wrapS=k,e.wrapT=k,e.minFilter=z,e.magFilter=z}),Fe=Ue();Be(c);const He=[0,1,2,3][Math.floor(Math.random()*4)],d=new X({extensions:{derivatives:!0},vertexShader:ee,fragmentShader:Ne,uniforms:{tBg:{value:Ie},tLogo:{value:Fe},uColorBg:{value:new q("#000000")},uColorLogo:{value:new q("#ffffff")},uNoise:{value:He},uDye:{value:null},uVel:{value:null},uUV:{value:null},uNoise1Opts:{value:new f(1.25,.25)},uNoise2Opts:{value:new f(2,.8)},uNoise3Opts:{value:new Q(5,2,3.8)},uNoise4Opts:{value:new xe(-3.8,-2,-3.9,-2.5)},uGlobalShape:{value:0},uGlobalOpen:{value:0},uNoiseMultiplier:{value:0},uLogoAnimation:{value:0},resolution:{value:new f(window.innerWidth,window.innerHeight)},time:{value:0}},depthTest:!1,depthWrite:!1,transparent:!1});oe.add(new J(new j(2,2),d));let u={x:0,y:0,hasMoved:!1};window.addEventListener("mousemove",e=>{const a=e.clientX/window.innerWidth,t=1-e.clientY/window.innerHeight;if(u.hasMoved){const i=a-u.x,o=t-u.y;(Math.abs(i)>0||Math.abs(o)>0)&&ae(c,a,t,i,o)}u.x=a,u.y=t,u.hasMoved=!0});window.addEventListener("touchmove",e=>{if(e.touches.length){const a=e.touches[0],t=a.clientX/window.innerWidth,i=1-a.clientY/window.innerHeight;if(u.hasMoved){const o=t-u.x,l=i-u.y;ae(c,t,i,o,l)}u.x=t,u.y=i,u.hasMoved=!0}},{passive:!0});window.addEventListener("resize",()=>{c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)});function O(e){return 1-Math.pow(1-e,5)}const le=performance.now();let Y=le;setTimeout(()=>{document.getElementById("webgl").classList.add("--visible")},100);setTimeout(()=>{document.getElementById("header").classList.add("--visible")},1250);function re(){requestAnimationFrame(re);const e=performance.now(),a=(e-le)/1e3,t=Math.min((e-Y)/1e3,.033);Y=e;const i=O(Math.min(1,Math.max(0,a/1.5))),o=O(Math.min(1,Math.max(0,(a-.75)/1.75))),l=O(Math.min(1,Math.max(0,(a-.75)/1.75)));d.uniforms.uGlobalShape.value=o,d.uniforms.uNoiseMultiplier.value=l,d.uniforms.uLogoAnimation.value=i,d.uniforms.time.value=a,Oe(c,t),d.uniforms.uDye.value=m.read.texture,d.uniforms.uVel.value=r.read.texture,d.uniforms.uUV.value=y.read.texture,c.setRenderTarget(null),c.render(oe,ie)}re();
