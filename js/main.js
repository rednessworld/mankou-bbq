/* ============================================================
   MAIN.JS — ManKou BBQ 满口香
   Nav · Parallax · Reveals · Tabs · Consent · WhatsApp · Loader
   ============================================================ */

/* ── NAV SCROLL CLASS ──────────────────────────────────────── */

const nav = document.getElementById('nav');

if (nav) {
  const syncNav = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', syncNav, { passive: true });
  syncNav();
}

/* ── MOBILE NAV TOGGLE ─────────────────────────────────────── */

const navToggle  = document.getElementById('nav-toggle');
const navLinks   = document.getElementById('nav-links');
const navOverlay = navLinks;

if (navToggle && navLinks) {
  function openNav() {
    navLinks.classList.add('nav__links--open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link for accessibility
    const firstLink = navLinks.querySelector('a, button');
    if (firstLink) firstLink.focus();
  }

  function closeNav(returnFocus = true) {
    navLinks.classList.remove('nav__links--open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (returnFocus) navToggle.focus();
  }

  navToggle.addEventListener('click', () => {
    navLinks.classList.contains('nav__links--open') ? closeNav() : openNav();
  });

  /* Close on any link tap — direct listeners are reliable on touch */
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeNav(false));
  });

  /* Focus trap inside mobile menu */
  navLinks.addEventListener('keydown', (e) => {
    if (!navLinks.classList.contains('nav__links--open')) return;
    const focusable = [...navLinks.querySelectorAll('a, button')].filter(
      el => !el.closest('[hidden]') && el.offsetParent !== null
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* Escape closes menu */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
      closeNav();
    }
  });
}

/* ── SMOOTH SCROLL for anchor links ────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    // Restore body scroll before scrollTo — scrollTo is a no-op while overflow:hidden
    if (navLinks && navLinks.classList.contains('nav__links--open')) {
      navLinks.classList.remove('nav__links--open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    const navH = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height')) || 72;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── HERO PARALLAX ─────────────────────────────────────────── */
/* iOS-safe: JS transform on <img>, never background-attachment:fixed */

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const img = document.getElementById('hero-parallax-img');
  if (!img) return;

  let ticking = false;

  function updateParallax() {
    img.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
})();

/* ── SCROLL REVEAL — Intersection Observer ─────────────────── */

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal, .reveal--fade, .reveal--heading, .reveal--scale')
      .forEach(el => el.classList.add('is-visible'));
    console.log('[reveal] reduced-motion active — all elements made visible immediately');
    return;
  }

  const targets = document.querySelectorAll('.reveal, .reveal--fade, .reveal--heading, .reveal--scale');
  console.log(`[reveal] observer set up — watching ${targets.length} elements`);

  if (targets.length === 0) {
    console.warn('[reveal] No .reveal elements found in DOM. Check that classes are applied in HTML.');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          console.log('[reveal] is-visible added to:', entry.target.tagName, entry.target.className.slice(0, 60));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
})();

/* ── MENU TABS ─────────────────────────────────────────────── */

const tabList = document.querySelector('[role="tablist"]');

if (tabList) {
  const tabs   = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(tab =>
    document.getElementById(tab.getAttribute('aria-controls'))
  );

  function activateTab(tab) {
    const targetPanel = document.getElementById(tab.getAttribute('aria-controls'));

    tabs.forEach(t => {
      t.classList.remove('menu__tab--active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    panels.forEach(p => { if (p) p.classList.add('menu__panel--hidden'); });

    tab.classList.add('menu__tab--active');
    tab.setAttribute('aria-selected', 'true');
    tab.removeAttribute('tabindex');

    if (targetPanel) targetPanel.classList.remove('menu__panel--hidden');
  }

  tabList.addEventListener('click', (e) => {
    const tab = e.target.closest('[role="tab"]');
    if (tab) activateTab(tab);
  });

  tabList.addEventListener('keydown', (e) => {
    const current = document.activeElement;
    if (!tabs.includes(current)) return;
    const idx = tabs.indexOf(current);
    let next;
    if (e.key === 'ArrowRight')     next = tabs[(idx + 1) % tabs.length];
    else if (e.key === 'ArrowLeft') next = tabs[(idx - 1 + tabs.length) % tabs.length];
    else if (e.key === 'Home')      next = tabs[0];
    else if (e.key === 'End')       next = tabs[tabs.length - 1];
    if (next) { e.preventDefault(); activateTab(next); next.focus(); }
  });

  tabs.forEach((tab, i) => { if (i !== 0) tab.setAttribute('tabindex', '-1'); });
}

/* ── COOKIE CONSENT ────────────────────────────────────────── */

const CONSENT_KEY  = 'cookie_consent';
const cookieBanner = document.getElementById('cookie-banner');
const btnAccept    = document.getElementById('cookie-accept');
const btnDecline   = document.getElementById('cookie-decline');

window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

function loadAnalytics() {
  const id = window.GA_MEASUREMENT_ID;
  if (!id || id === 'G-XXXXXXXXXX') return;
  const s = document.createElement('script');
  s.src   = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
}

function applyConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
  if (cookieBanner) cookieBanner.hidden = true;
  if (value === 'accepted') loadAnalytics();
}

function initConsent() {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted') {
    loadAnalytics();
  } else if (!stored && cookieBanner) {
    setTimeout(() => { cookieBanner.hidden = false; }, 800);
  } else if (cookieBanner) {
    cookieBanner.hidden = true;
  }
}

btnAccept?.addEventListener('click',  () => applyConsent('accepted'));
btnDecline?.addEventListener('click', () => applyConsent('necessary'));
initConsent();

/* ── LOADING SCREEN ────────────────────────────────────────── */

const loader = document.getElementById('loader');

if (loader) {
  const dismiss = () => {
    loader.classList.add('loader--hidden');
    setTimeout(() => loader.remove(), 500); // 500ms > --dur-base (400ms) + buffer
  };

  if (sessionStorage.getItem('mk-visited')) {
    loader.remove();
  } else {
    sessionStorage.setItem('mk-visited', '1');
    if (document.readyState === 'complete') {
      setTimeout(dismiss, 600);
    } else {
      window.addEventListener('load', () => setTimeout(dismiss, 600), { once: true });
    }
  }
}

/* ── BACK TO TOP ───────────────────────────────────────────── */

const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  const syncBtt = () => {
    backToTop.classList.toggle('back-to-top--visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', syncBtt, { passive: true });
  syncBtt();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── WHATSAPP FLOATING BUTTON ──────────────────────────────── */
/* href is built in i18n.js applyLang() — this just ensures it's correct on load */

(function () {
  const waFab = document.getElementById('whatsapp-fab');
  if (!waFab) return;
  const phone = waFab.dataset.phone.replace(/\D/g, '');
  const lang  = localStorage.getItem('preferred_lang') || 'es';
  const msgs  = {
    es: 'Hola, me gustaría reservar una mesa en ManKou BBQ. ¿Tenéis disponibilidad?',
    ca: 'Hola, m\'agradaria reservar una taula a ManKou BBQ. Teniu disponibilitat?',
    en: 'Hello, I\'d like to reserve a table at ManKou BBQ. Do you have availability?',
  };
  waFab.href = `https://wa.me/${phone}?text=${encodeURIComponent(msgs[lang] || msgs.es)}`;
})();
