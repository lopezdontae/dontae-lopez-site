import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as ee,l as te,m as s,n as ne,o as c,p as re,r as l,s as u,t as d,u as f,v as ie}from"./three-biUxlLo3.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ae=document.getElementById(`root`);ae.innerHTML=`
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
              <h2 class="page__label">Who</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">Dontae Lopez is an entrepreneur, researcher, and athlete. He is the founder and CEO of <a href="https://threeum.com" target="_blank" rel="noopener noreferrer" class="page__link" style="font-weight:600">Threeum</a> and the creator of Cyte and Cella. He is also the Creative Director of Muerte Studio, a prospect athlete under Mission Twelve, and part of the Ground Zero series.</p>
              <p class="page__paragraph">He is originally from Colorado and was born in Colorado Springs.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Background</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">Lopez began his career in equity research and operations. His work later expanded into venture investing, company building, and operating roles across emerging technology. That progression brought together finance, research, and systems thinking, first through evaluating companies and technologies, and later through building new ones.</p>
              <p class="page__paragraph">Over the past several years, his research has focused increasingly on artificial intelligence, quantum information, computing infrastructure, and the design of systems that operate under uncertainty. His project-based evaluation work included outputs from systems developed by OpenAI, Anthropic, NVIDIA, Meta, ElevenLabs, and Lovable. The work has included model training and evaluation, quality assurance, human-preference research, knowledge-base and infrastructure research, adversarial red teaming, data work, code-generation projects, and testing new model capabilities.</p>
              <p class="page__paragraph">To supplement his professional work, Lopez pursued a self-directed course of study across artificial intelligence, finance, information systems, cybersecurity, quantum information, infrastructure, and organizational design. It included university coursework, executive education, online courses, and professional certifications selected according to the problems he was working to understand. Rather than following a single institutional track, he assembled the technical, financial, and organizational knowledge needed to pursue the systems he envisioned.</p>
              <p class="page__paragraph">That work now converges at Threeum, where he is building across software, infrastructure, biological computing, and dynamical hardware.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Focus</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">He is drawn to the hardest version of everything. The research that has no clear answer yet. The business that has no playbook. The sport that demands everything and negotiates nothing. The challenge is not a byproduct of the work. It is the point.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Philosophy</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">He believes the work speaks for itself if you let it. That means taking the time to get it right, resisting the pressure to move fast when the situation calls for patience, and holding the same standard whether anyone is watching or not. The domain does not matter. The discipline does.</p>
            </div>
          </div>
          <p class="page__disclaimer">Some artificial intelligence work described on this page was completed on a project basis as an independent contractor. Company names identify the developers of systems evaluated or projects supported. No employment, partnership, sponsorship, or endorsement is implied.</p>
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
        <li><button type="button" class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mobileMenu">Menu</button></li>
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
`;var p={home:`/`,about:`/about`,contact:`/contact`};function m(e){let t=e.replace(/\/+$/,``)||`/`;return Object.entries(p).find(([,e])=>e===t)?.[0]||`home`}function h(e){let t=e!==`home`;document.documentElement.style.setProperty(`--background`,t?`#fff`:`#000`),document.documentElement.style.setProperty(`--color`,t?`#000`:`#fff`)}var g=m(window.location.pathname),_=!1;document.querySelectorAll(`.page`).forEach(e=>{e.classList.toggle(`--active`,e.dataset.page===g)}),h(g);function v(e,{updateHistory:t=!0}={}){if(e===g||_)return;_=!0,b();let n=document.querySelector(`.page[data-page="${g}"]`),r=document.querySelector(`.page[data-page="${e}"]`);if(!r){_=!1;return}t&&window.history.pushState({page:e},``,p[e]);let i=e!==`home`,a=g!==`home`;n.classList.remove(`--active`),i?(h(e),r.querySelectorAll(`.line__inner`).forEach(e=>e.removeAttribute(`style`)),r.querySelectorAll(`.page__grid`).forEach(e=>e.removeAttribute(`style`)),r.classList.remove(`--active`),r.offsetHeight,setTimeout(()=>{r.classList.add(`--active`),g=e,setTimeout(()=>{_=!1},600)},a?150:50)):setTimeout(()=>{h(e),r.classList.add(`--active`),g=e,_=!1},400)}var y=!1;function oe(){y=!0,document.getElementById(`mobileMenu`).classList.add(`--open`),document.getElementById(`menuToggle`).textContent=`Close`,document.getElementById(`menuToggle`).setAttribute(`aria-expanded`,`true`)}function b(){y=!1,document.getElementById(`mobileMenu`).classList.remove(`--open`),document.getElementById(`menuToggle`).textContent=`Menu`,document.getElementById(`menuToggle`).setAttribute(`aria-expanded`,`false`)}document.getElementById(`menuToggle`).addEventListener(`click`,e=>{e.preventDefault(),y?b():oe()}),document.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),v(e.dataset.nav)})}),window.addEventListener(`popstate`,()=>{v(m(window.location.pathname),{updateHistory:!1})}),document.querySelectorAll(`.contact-tab`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;document.querySelectorAll(`.contact-tab`).forEach(e=>e.classList.remove(`--active`)),e.classList.add(`--active`),document.querySelectorAll(`.contact-form-wrap`).forEach(e=>e.classList.remove(`--active`));let n=document.querySelector(`.contact-form-wrap[data-form="${t}"]`);n&&n.classList.add(`--active`)})});var se=`https://formsubmit.co/ajax/`+[100,111,110,116,97,101,108,111,112,101,122,64,112,114,111,116,111,110,109,97,105,108,46,99,111,109].map(e=>String.fromCharCode(e)).join(``);document.querySelectorAll(`.contact-form`).forEach(e=>{e.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`.form-submit`),r=n.textContent;n.textContent=`Sending...`,n.disabled=!0;let i=e.dataset.formType,a=new FormData(e);a.append(`_subject`,`[dontaelopez.com] ${i} inquiry`),a.append(`_template`,`table`),a.append(`_captcha`,`false`),a.append(`Form Type`,i),fetch(se,{method:`POST`,headers:{Accept:`application/json`},body:a}).then(async e=>{let t=await e.json().catch(()=>null);if(!e.ok||t?.success===!1)throw Error(`Form submission failed`);return t}).then(()=>{n.textContent=`Sent`,n.classList.add(`--sent`),e.reset(),setTimeout(()=>{n.textContent=r,n.classList.remove(`--sent`),n.disabled=!1},3e3)}).catch(()=>{n.textContent=`Error — try again`,n.disabled=!1,setTimeout(()=>{n.textContent=r},3e3)})})});function x(t,n,r){return new e(t,n,{minFilter:r||1006,magFilter:r||1006,format:te,type:ee,depthBuffer:!1,stencilBuffer:!1})}function S(e,t,n){return{read:x(e,t,n),write:x(e,t,n),swap(){let e=this.read;this.read=this.write,this.write=e}}}var C=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,ce=`
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
`,le=new n(2,2),w=new d;w.position.z=1;function T(e,t,n){let i=new c(le,t),a=new r;a.add(i),e.setRenderTarget(n||null),e.render(a,w),e.setRenderTarget(null)}function E(e,t,n){return new i({vertexShader:n||ce,fragmentShader:e,uniforms:Object.assign({texelSize:{value:new s}},t),depthTest:!1,depthWrite:!1})}function ue(){let e=document.createElement(`canvas`);e.width=512,e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#000`,t.fillRect(0,0,512,512),t.fillStyle=`#ff0000`,[[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,4],[2,0],[2,5],[3,0],[3,5],[4,0],[4,5],[5,0],[5,1],[5,4],[6,0],[6,1],[6,2],[6,3]].forEach(([e,n])=>{let r=126.5+n*44,i=104.5+e*44;t.beginPath(),t.roundRect(r,i,39,39,10.920000000000002),t.fill()});let n=document.createElement(`canvas`);n.width=512,n.height=512;let r=n.getContext(`2d`);r.filter=`blur(10px)`,r.drawImage(e,0,0),t.clearRect(0,0,512,512),t.fillStyle=`#000`,t.fillRect(0,0,512,512),t.filter=`blur(5px)`,t.drawImage(n,0,0);let i=new ne(e);return i.needsUpdate=!0,i}var D=128,O=128,k=512,A=512,j,M,N,P,F,I;function de(e){j=S(D,O),M=S(D,O),N=x(D,O,u),P=x(D,O,u),F=S(k,A),I=S(k,A);let t=E(`
    varying vec2 vUv;
    void main() { gl_FragColor = vec4(vUv, 0.0, 0.0); }
  `,{},C);T(e,t,I.read),T(e,t,I.write)}var L=E(`
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
`,{uTarget:{value:null},aspectRatio:{value:1},color:{value:new o},point:{value:new s},prevPoint:{value:new s},radius:{value:0},isDye:{value:!1}}),R=E(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
  }
`,{uVelocity:{value:null}}),z=E(`
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
`,{uVelocity:{value:null},uCurl:{value:null},curlAmount:{value:.001},dt:{value:.016}}),B=E(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
  }
`,{uVelocity:{value:null}}),V=E(`
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
`,{uPressure:{value:null},uDivergence:{value:null}}),H=E(`
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
`,{uPressure:{value:null},uVelocity:{value:null}}),U=E(`
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
`,{uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1}}),W=E(`
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
    float len = length(disp);
    vec2 dispNor = len > 0.00001 ? disp / len : vec2(0.0);
    prevVel += dispNor * (len * 0.03) * dtRatio;
    prevVel += vel * -0.00002 * dtRatio;
    prevVel *= exp2(log2(0.925) * dtRatio);
    prevUV += prevVel * dtRatio;
    gl_FragColor = vec4(prevUV, prevVel);
  }
`,{dtRatio:{value:1},tDiffuse:{value:null},tVel:{value:null}}),G=new s(1/D,1/O),K=new s(1/k,1/A);function q(e,t,n,r,i){let a=window.innerWidth/window.innerHeight;L.uniforms.texelSize.value=G,L.uniforms.uTarget.value=j.read.texture,L.uniforms.aspectRatio.value=a,L.uniforms.point.value.set(t,n),L.uniforms.prevPoint.value.set(t-r,n-i),L.uniforms.color.value.set(r*500,i*500,0),L.uniforms.radius.value=.25,L.uniforms.isDye.value=!1,T(e,L,j.write),j.swap(),L.uniforms.uTarget.value=F.read.texture,L.uniforms.color.value.set(.8,.8,.8),L.uniforms.radius.value=.25,L.uniforms.isDye.value=!0,T(e,L,F.write),F.swap()}function fe(e,t){R.uniforms.texelSize.value=G,R.uniforms.uVelocity.value=j.read.texture,T(e,R,P),z.uniforms.texelSize.value=G,z.uniforms.uVelocity.value=j.read.texture,z.uniforms.uCurl.value=P.texture,z.uniforms.dt.value=t,T(e,z,j.write),j.swap(),B.uniforms.texelSize.value=G,B.uniforms.uVelocity.value=j.read.texture,T(e,B,N);for(let t=0;t<2;t++)V.uniforms.texelSize.value=G,V.uniforms.uPressure.value=M.read.texture,V.uniforms.uDivergence.value=N.texture,T(e,V,M.write),M.swap();H.uniforms.texelSize.value=G,H.uniforms.uPressure.value=M.read.texture,H.uniforms.uVelocity.value=j.read.texture,T(e,H,j.write),j.swap(),U.uniforms.texelSize.value=G,U.uniforms.uVelocity.value=j.read.texture,U.uniforms.uSource.value=j.read.texture,U.uniforms.dt.value=t,U.uniforms.dissipation.value=.97,T(e,U,j.write),j.swap(),U.uniforms.texelSize.value=K,U.uniforms.uVelocity.value=j.read.texture,U.uniforms.uSource.value=F.read.texture,U.uniforms.dissipation.value=.93,T(e,U,F.write),F.swap(),W.uniforms.texelSize.value=K,W.uniforms.tDiffuse.value=I.read.texture,W.uniforms.tVel.value=j.read.texture,W.uniforms.dtRatio.value=t*60,T(e,W,I.write),I.swap()}var pe=`
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
`,me=document.getElementById(`webgl`),J=new ie({antialias:!1,alpha:!1});J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setSize(window.innerWidth,window.innerHeight),J.autoClear=!1,me.appendChild(J.domElement);var Y=new r,X=new d;X.position.z=1;var he=new re().load(`/images/bg4.png`,e=>{e.wrapS=f,e.wrapT=f,e.minFilter=t,e.magFilter=t}),ge=ue();de(J);var _e=[0,1,2,3][Math.floor(Math.random()*4)],Z=new i({extensions:{derivatives:!0},vertexShader:C,fragmentShader:pe,uniforms:{tBg:{value:he},tLogo:{value:ge},uColorBg:{value:new l(`#000000`)},uColorLogo:{value:new l(`#ffffff`)},uNoise:{value:_e},uDye:{value:null},uVel:{value:null},uUV:{value:null},uNoise1Opts:{value:new s(1.25,.25)},uNoise2Opts:{value:new s(2,.8)},uNoise3Opts:{value:new o(5,2,3.8)},uNoise4Opts:{value:new a(-3.8,-2,-3.9,-2.5)},uGlobalShape:{value:0},uGlobalOpen:{value:0},uNoiseMultiplier:{value:0},uLogoAnimation:{value:0},resolution:{value:new s(window.innerWidth,window.innerHeight)},time:{value:0}},depthTest:!1,depthWrite:!1,transparent:!1});Y.add(new c(new n(2,2),Z));var Q={x:0,y:0,hasMoved:!1};window.addEventListener(`mousemove`,e=>{let t=e.clientX/window.innerWidth,n=1-e.clientY/window.innerHeight;if(Q.hasMoved){let e=t-Q.x,r=n-Q.y;(Math.abs(e)>0||Math.abs(r)>0)&&q(J,t,n,e,r)}Q.x=t,Q.y=n,Q.hasMoved=!0}),window.addEventListener(`touchmove`,e=>{if(e.touches.length){let t=e.touches[0],n=t.clientX/window.innerWidth,r=1-t.clientY/window.innerHeight;Q.hasMoved&&q(J,n,r,n-Q.x,r-Q.y),Q.x=n,Q.y=r,Q.hasMoved=!0}},{passive:!0}),window.addEventListener(`resize`,()=>{J.setSize(window.innerWidth,window.innerHeight),J.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)});function $(e){return 1-(1-e)**5}var ve=performance.now(),ye=ve;setTimeout(()=>{document.getElementById(`webgl`).classList.add(`--visible`)},100),setTimeout(()=>{document.getElementById(`header`).classList.add(`--visible`)},1250);function be(){requestAnimationFrame(be);let e=performance.now(),t=(e-ve)/1e3,n=Math.min((e-ye)/1e3,.033);ye=e;let r=$(Math.min(1,Math.max(0,t/1.5))),i=$(Math.min(1,Math.max(0,(t-.75)/1.75))),a=$(Math.min(1,Math.max(0,(t-.75)/1.75)));Z.uniforms.uGlobalShape.value=i,Z.uniforms.uNoiseMultiplier.value=a,Z.uniforms.uLogoAnimation.value=r,Z.uniforms.time.value=t,fe(J,n),Z.uniforms.uDye.value=F.read.texture,Z.uniforms.uVel.value=j.read.texture,Z.uniforms.uUV.value=I.read.texture,J.setRenderTarget(null),J.render(Y,X)}be();