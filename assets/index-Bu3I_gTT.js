import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as ee,l as te,m as s,n as ne,o as re,p as ie,r as c,s as l,t as u,u as d,v as ae}from"./three-biUxlLo3.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var oe=`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>`,se=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/></svg>`,f=`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,ce=[{icon:oe,name:`Substack`,detail:`Essays & everything I’m making`,url:`https://lopezdontae.substack.com`,featured:!0},{icon:se,name:`Off Script By Dontae`,detail:`1–3 minute thoughts. The occasional detour.`,url:`https://off-script-by-dontae.beehiiv.com`,featured:!0},{icon:f,name:`YouTube`,detail:`@lopezdontae`,url:`https://www.youtube.com/@lopezdontae`,featured:!1},{icon:f,name:`Taysonlyfun`,detail:`Random videos. A little less polished, a little more me.`,url:`https://www.youtube.com/@taysonlyfun`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,name:`Instagram`,detail:`@lopezdontae`,url:`https://www.instagram.com/lopezdontae/`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,name:`TikTok`,detail:`@lopezdontae`,url:`https://www.tiktok.com/@lopezdontae`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>`,name:`X`,detail:`@lopezdontae`,url:`https://x.com/lopezdontae`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Threads</title><path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z"/></svg>`,name:`Threads`,detail:`@lopezdontae`,url:`https://www.threads.com/@lopezdontae`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/></svg>`,name:`Bluesky`,detail:`@lopezdontae.bsky.social`,url:`https://bsky.app/profile/lopezdontae.bsky.social`,featured:!1},{icon:`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,name:`LinkedIn`,detail:`Dontae X.Y. Lopez`,url:`https://www.linkedin.com/in/dontaelopez/`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,name:`Facebook`,detail:`Dontae X.Y. Lopez · Creator page`,url:`https://www.facebook.com/lopezdontae`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Snapchat</title><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>`,name:`Snapchat`,detail:`@lopezdontae`,url:`https://www.snapchat.com/add/lopezdontae`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>`,name:`Reddit`,detail:`u/lopezdontae`,url:`https://www.reddit.com/user/lopezdontae/`,featured:!1},{icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Indie Hackers</title><path d="M0 0h24v24H0V0Zm5.4 17.2h2.4V6.8H5.4v10.4Zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4v10.4Z"/></svg>`,name:`Indie Hackers`,detail:`Building & sharing what I learn`,url:`https://www.indiehackers.com/SkillIssue`,featured:!1}];function p(e){return e.replace(`<svg `,`<svg aria-hidden="true" focusable="false" `).replace(/<title>.*?<\/title>/g,``)}function le(){return`<div class="social-directory">${ce.map(e=>`
    <a class="social-card${e.featured?` social-card--featured`:``}" href="${e.url}" target="_blank" rel="noopener noreferrer" aria-label="${e.name} (opens in a new tab)">
      <span class="social-card__icon">${p(e.icon)}</span>
      <span class="social-card__copy"><span class="social-card__name">${e.name}</span><span class="social-card__detail">${e.detail}</span></span>
      <span class="social-card__arrow" aria-hidden="true">↗</span>
    </a>`).join(``)}</div>`}function ue(){return ce.filter(e=>[`Substack`,`Instagram`,`YouTube`,`X`,`LinkedIn`].includes(e.name)).map(e=>`<a href="${e.url}" target="_blank" rel="noopener noreferrer" aria-label="${e.name} (opens in a new tab)" title="${e.name}">${p(e.icon)}</a>`).join(``)}var de=document.getElementById(`root`);de.innerHTML=`
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
              <p class="page__paragraph">Entrepreneur, Researcher, Athlete</p>
              <p class="page__paragraph">Dontae Lopez is an AI researcher and entrepreneur, founder and CEO of <a href="https://threeum.com" target="_blank" rel="noopener noreferrer" class="page__link" style="font-weight:600">Threeum</a>, and creator of Cyte and Cella. His work spans artificial intelligence and computing infrastructure, with research interests in biological computing and dynamical hardware.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Background</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">He began his career in equity research and operations before expanding into venture investing, company building, and technology research. That background informs his approach to connecting technical development with the financial and organizational decisions required to bring it into use.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Research</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">At Threeum, he works across AI, software, and computing infrastructure, alongside research into biological computing and dynamical hardware. Selected research and project details are omitted to respect confidentiality obligations.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Beyond Work</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">Outside his research and business work, Dontae is the Creative Director of Muerte Studio, a prospect athlete under Mission Twelve, and part of the Ground Zero series. He is originally from Colorado Springs, Colorado.</p>
            </div>
          </div>
          <div class="page__grid">
            <div class="page__col page__col--label">
              <h2 class="page__label">Contact</h2>
            </div>
            <div class="page__col page__col--text">
              <p class="page__paragraph">For research collaborations, business opportunities, or sponsorship inquiries, <a href="/contact" data-nav="contact" class="page__link">get in touch</a>. For writing, videos, and day-to-day updates, <a href="/socials" data-nav="socials" class="page__link">find me on social</a>.</p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- SOCIALS -->
    <div class="page page--socials" data-page="socials">
      <div class="page__inner">
        <section class="page__hero">
          <h1 class="page__title"><span class="line"><span class="line__inner">Find me<br>elsewhere.</span></span></h1>
        </section>
        <section class="page__content" aria-label="Social profiles and newsletters">
          <p class="page__paragraph social-intro">Building things. Trying things. Figuring it out.<br>Writing, videos, and whatever has my attention.</p>
          ${le()}
          <p class="social-contact">For collaborations and everything else: <a href="mailto:hello@dontaelopez.com">hello@dontaelopez.com</a></p>
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

          <p class="page__paragraph contact-social-intro">Looking for my writing, videos, or social profiles? <a href="/socials" data-nav="socials" class="page__link">Find all my channels here ↗</a></p>

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
        <li class="header__socials">${ue()}</li>
      </ul>
      <ul class="header__nav header__nav--right nav-desktop">
        <li><a href="/" data-nav="home">Home</a></li>
        <li><a href="/about" data-nav="about">About</a></li>
        <li><a href="/socials" data-nav="socials">Socials</a></li>
        <li><a href="/contact" data-nav="contact">Contact</a></li>
      </ul>
      <ul class="header__nav header__nav--right nav-mobile">
        <li><a href="/socials" data-nav="socials">Socials</a></li>
        <li><button type="button" class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mobileMenu">Menu</button></li>
      </ul>
    </div>
  </header>

  <!-- Mobile menu overlay -->
  <div class="mobile-menu" id="mobileMenu">
    <nav class="mobile-menu__nav">
      <a href="/" data-nav="home" class="mobile-menu__link">Home</a>
      <a href="/about" data-nav="about" class="mobile-menu__link">About</a>
      <a href="/socials" data-nav="socials" class="mobile-menu__link">Socials</a>
      <a href="/contact" data-nav="contact" class="mobile-menu__link">Contact</a>
    </nav>
  </div>
`;var m={home:`/`,about:`/about`,contact:`/contact`,socials:`/socials`};function h(e){let t=e.replace(/\/+$/,``)||`/`;return Object.entries(m).find(([,e])=>e===t)?.[0]||`home`}function g(e){let t=e!==`home`;document.documentElement.style.setProperty(`--background`,t?`#fff`:`#000`),document.documentElement.style.setProperty(`--color`,t?`#000`:`#fff`)}var _=h(window.location.pathname),v=!1;document.querySelectorAll(`.page`).forEach(e=>{e.classList.toggle(`--active`,e.dataset.page===_)}),g(_);function y(e,{updateHistory:t=!0}={}){if(e===_){x();return}if(v)return;v=!0,x();let n=document.querySelector(`.page[data-page="${_}"]`),r=document.querySelector(`.page[data-page="${e}"]`);if(!r){v=!1;return}t&&window.history.pushState({page:e},``,m[e]);let i=e!==`home`,a=_!==`home`;n.classList.remove(`--active`),i?(g(e),r.querySelectorAll(`.line__inner`).forEach(e=>e.removeAttribute(`style`)),r.querySelectorAll(`.page__grid`).forEach(e=>e.removeAttribute(`style`)),r.classList.remove(`--active`),r.offsetHeight,setTimeout(()=>{r.classList.add(`--active`),_=e,setTimeout(()=>{v=!1},600)},a?150:50)):setTimeout(()=>{g(e),r.classList.add(`--active`),_=e,v=!1},400)}var b=!1;function fe(){b=!0,document.getElementById(`mobileMenu`).classList.add(`--open`),document.getElementById(`menuToggle`).textContent=`Close`,document.getElementById(`menuToggle`).setAttribute(`aria-expanded`,`true`)}function x(){b=!1,document.getElementById(`mobileMenu`).classList.remove(`--open`),document.getElementById(`menuToggle`).textContent=`Menu`,document.getElementById(`menuToggle`).setAttribute(`aria-expanded`,`false`)}document.getElementById(`menuToggle`).addEventListener(`click`,e=>{e.preventDefault(),b?x():fe()}),document.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),y(e.dataset.nav)})}),window.addEventListener(`popstate`,()=>{y(h(window.location.pathname),{updateHistory:!1})}),document.querySelectorAll(`.contact-tab`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;document.querySelectorAll(`.contact-tab`).forEach(e=>e.classList.remove(`--active`)),e.classList.add(`--active`),document.querySelectorAll(`.contact-form-wrap`).forEach(e=>e.classList.remove(`--active`));let n=document.querySelector(`.contact-form-wrap[data-form="${t}"]`);n&&n.classList.add(`--active`)})});var pe=`https://formsubmit.co/ajax/`+[100,111,110,116,97,101,108,111,112,101,122,64,112,114,111,116,111,110,109,97,105,108,46,99,111,109].map(e=>String.fromCharCode(e)).join(``);document.querySelectorAll(`.contact-form`).forEach(e=>{e.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`.form-submit`),r=n.textContent;n.textContent=`Sending...`,n.disabled=!0;let i=e.dataset.formType,a=new FormData(e);a.append(`_subject`,`[dontaelopez.com] ${i} inquiry`),a.append(`_template`,`table`),a.append(`_captcha`,`false`),a.append(`Form Type`,i),fetch(pe,{method:`POST`,headers:{Accept:`application/json`},body:a}).then(async e=>{let t=await e.json().catch(()=>null);if(!e.ok||t?.success===!1)throw Error(`Form submission failed`);return t}).then(()=>{n.textContent=`Sent`,n.classList.add(`--sent`),e.reset(),setTimeout(()=>{n.textContent=r,n.classList.remove(`--sent`),n.disabled=!1},3e3)}).catch(()=>{n.textContent=`Error — try again`,n.disabled=!1,setTimeout(()=>{n.textContent=r},3e3)})})});function S(t,n,r){return new e(t,n,{minFilter:r||1006,magFilter:r||1006,format:te,type:ee,depthBuffer:!1,stencilBuffer:!1})}function C(e,t,n){return{read:S(e,t,n),write:S(e,t,n),swap(){let e=this.read;this.read=this.write,this.write=e}}}var w=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,me=`
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
`,he=new n(2,2),T=new u;T.position.z=1;function E(e,t,n){let i=new re(he,t),a=new r;a.add(i),e.setRenderTarget(n||null),e.render(a,T),e.setRenderTarget(null)}function D(e,t,n){return new i({vertexShader:n||me,fragmentShader:e,uniforms:Object.assign({texelSize:{value:new s}},t),depthTest:!1,depthWrite:!1})}function ge(){let e=document.createElement(`canvas`);e.width=512,e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#000`,t.fillRect(0,0,512,512),t.fillStyle=`#ff0000`,[[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,4],[2,0],[2,5],[3,0],[3,5],[4,0],[4,5],[5,0],[5,1],[5,4],[6,0],[6,1],[6,2],[6,3]].forEach(([e,n])=>{let r=126.5+n*44,i=104.5+e*44;t.beginPath(),t.roundRect(r,i,39,39,10.920000000000002),t.fill()});let n=document.createElement(`canvas`);n.width=512,n.height=512;let r=n.getContext(`2d`);r.filter=`blur(10px)`,r.drawImage(e,0,0),t.clearRect(0,0,512,512),t.fillStyle=`#000`,t.fillRect(0,0,512,512),t.filter=`blur(5px)`,t.drawImage(n,0,0);let i=new ne(e);return i.needsUpdate=!0,i}var O=128,k=128,A=512,j=512,M,N,P,F,I,L;function _e(e){M=C(O,k),N=C(O,k),P=S(O,k,l),F=S(O,k,l),I=C(A,j),L=C(A,j);let t=D(`
    varying vec2 vUv;
    void main() { gl_FragColor = vec4(vUv, 0.0, 0.0); }
  `,{},w);E(e,t,L.read),E(e,t,L.write)}var R=D(`
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
`,{uTarget:{value:null},aspectRatio:{value:1},color:{value:new o},point:{value:new s},prevPoint:{value:new s},radius:{value:0},isDye:{value:!1}}),z=D(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
  }
`,{uVelocity:{value:null}}),B=D(`
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
`,{uVelocity:{value:null},uCurl:{value:null},curlAmount:{value:.001},dt:{value:.016}}),V=D(`
  uniform sampler2D uVelocity;
  varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
  void main() {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
  }
`,{uVelocity:{value:null}}),H=D(`
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
`,{uPressure:{value:null},uDivergence:{value:null}}),U=D(`
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
`,{uPressure:{value:null},uVelocity:{value:null}}),W=D(`
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
`,{uVelocity:{value:null},uSource:{value:null},dt:{value:.016},dissipation:{value:1}}),G=D(`
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
`,{dtRatio:{value:1},tDiffuse:{value:null},tVel:{value:null}}),K=new s(1/O,1/k),q=new s(1/A,1/j);function J(e,t,n,r,i){let a=window.innerWidth/window.innerHeight;R.uniforms.texelSize.value=K,R.uniforms.uTarget.value=M.read.texture,R.uniforms.aspectRatio.value=a,R.uniforms.point.value.set(t,n),R.uniforms.prevPoint.value.set(t-r,n-i),R.uniforms.color.value.set(r*500,i*500,0),R.uniforms.radius.value=.25,R.uniforms.isDye.value=!1,E(e,R,M.write),M.swap(),R.uniforms.uTarget.value=I.read.texture,R.uniforms.color.value.set(.8,.8,.8),R.uniforms.radius.value=.25,R.uniforms.isDye.value=!0,E(e,R,I.write),I.swap()}function ve(e,t){z.uniforms.texelSize.value=K,z.uniforms.uVelocity.value=M.read.texture,E(e,z,F),B.uniforms.texelSize.value=K,B.uniforms.uVelocity.value=M.read.texture,B.uniforms.uCurl.value=F.texture,B.uniforms.dt.value=t,E(e,B,M.write),M.swap(),V.uniforms.texelSize.value=K,V.uniforms.uVelocity.value=M.read.texture,E(e,V,P);for(let t=0;t<2;t++)H.uniforms.texelSize.value=K,H.uniforms.uPressure.value=N.read.texture,H.uniforms.uDivergence.value=P.texture,E(e,H,N.write),N.swap();U.uniforms.texelSize.value=K,U.uniforms.uPressure.value=N.read.texture,U.uniforms.uVelocity.value=M.read.texture,E(e,U,M.write),M.swap(),W.uniforms.texelSize.value=K,W.uniforms.uVelocity.value=M.read.texture,W.uniforms.uSource.value=M.read.texture,W.uniforms.dt.value=t,W.uniforms.dissipation.value=.97,E(e,W,M.write),M.swap(),W.uniforms.texelSize.value=q,W.uniforms.uVelocity.value=M.read.texture,W.uniforms.uSource.value=I.read.texture,W.uniforms.dissipation.value=.93,E(e,W,I.write),I.swap(),G.uniforms.texelSize.value=q,G.uniforms.tDiffuse.value=L.read.texture,G.uniforms.tVel.value=M.read.texture,G.uniforms.dtRatio.value=t*60,E(e,G,L.write),L.swap()}var ye=`
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
`,be=document.getElementById(`webgl`),Y=new ae({antialias:!1,alpha:!1});Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.setSize(window.innerWidth,window.innerHeight),Y.autoClear=!1,be.appendChild(Y.domElement);var X=new r,xe=new u;xe.position.z=1;var Se=new ie().load(`/images/bg4.png`,e=>{e.wrapS=d,e.wrapT=d,e.minFilter=t,e.magFilter=t}),Ce=ge();_e(Y);var we=[0,1,2,3][Math.floor(Math.random()*4)],Z=new i({extensions:{derivatives:!0},vertexShader:w,fragmentShader:ye,uniforms:{tBg:{value:Se},tLogo:{value:Ce},uColorBg:{value:new c(`#000000`)},uColorLogo:{value:new c(`#ffffff`)},uNoise:{value:we},uDye:{value:null},uVel:{value:null},uUV:{value:null},uNoise1Opts:{value:new s(1.25,.25)},uNoise2Opts:{value:new s(2,.8)},uNoise3Opts:{value:new o(5,2,3.8)},uNoise4Opts:{value:new a(-3.8,-2,-3.9,-2.5)},uGlobalShape:{value:0},uGlobalOpen:{value:0},uNoiseMultiplier:{value:0},uLogoAnimation:{value:0},resolution:{value:new s(window.innerWidth,window.innerHeight)},time:{value:0}},depthTest:!1,depthWrite:!1,transparent:!1});X.add(new re(new n(2,2),Z));var Q={x:0,y:0,hasMoved:!1};window.addEventListener(`mousemove`,e=>{let t=e.clientX/window.innerWidth,n=1-e.clientY/window.innerHeight;if(Q.hasMoved){let e=t-Q.x,r=n-Q.y;(Math.abs(e)>0||Math.abs(r)>0)&&J(Y,t,n,e,r)}Q.x=t,Q.y=n,Q.hasMoved=!0}),window.addEventListener(`touchmove`,e=>{if(e.touches.length){let t=e.touches[0],n=t.clientX/window.innerWidth,r=1-t.clientY/window.innerHeight;Q.hasMoved&&J(Y,n,r,n-Q.x,r-Q.y),Q.x=n,Q.y=r,Q.hasMoved=!0}},{passive:!0}),window.addEventListener(`resize`,()=>{Y.setSize(window.innerWidth,window.innerHeight),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)});function $(e){return 1-(1-e)**5}var Te=performance.now(),Ee=Te;setTimeout(()=>{document.getElementById(`webgl`).classList.add(`--visible`)},100),setTimeout(()=>{document.getElementById(`header`).classList.add(`--visible`)},1250);function De(){requestAnimationFrame(De);let e=performance.now(),t=(e-Te)/1e3,n=Math.min((e-Ee)/1e3,.033);Ee=e;let r=$(Math.min(1,Math.max(0,t/1.5))),i=$(Math.min(1,Math.max(0,(t-.75)/1.75))),a=$(Math.min(1,Math.max(0,(t-.75)/1.75)));Z.uniforms.uGlobalShape.value=i,Z.uniforms.uNoiseMultiplier.value=a,Z.uniforms.uLogoAnimation.value=r,Z.uniforms.time.value=t,ve(Y,n),Z.uniforms.uDye.value=I.read.texture,Z.uniforms.uVel.value=M.read.texture,Z.uniforms.uUV.value=L.read.texture,Y.setRenderTarget(null),Y.render(X,xe)}De();