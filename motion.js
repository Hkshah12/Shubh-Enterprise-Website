/* Shubh Enterprise — Fresh Precision motion
   Vanilla JS: scroll-reveal + stagger, stat count-up, hero parallax, navbar state.
   Respects prefers-reduced-motion. No dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Navbar scrolled state --- */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    var onScroll = function () { navbar.classList.toggle('scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Stagger delay: siblings reveal in sequence --- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  revealEls.forEach(function (el) {
    var parent = el.parentElement;
    if (!parent) return;
    var siblings = Array.prototype.filter.call(parent.children, function (c) {
      return c.classList && c.classList.contains('reveal');
    });
    if (siblings.length > 1) {
      var i = siblings.indexOf(el);
      el.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
    }
  });

  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
    runCounters(true);
    return;
  }

  /* --- Reveal on scroll --- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(function (el) { io.observe(el); });

  /* --- Stat count-up --- */
  function runCounters(instant) {
    var counters = Array.prototype.slice.call(document.querySelectorAll('.counter'));
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if (instant) { el.textContent = target + suffix; return; }
      var started = false;
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !started) {
            started = true;
            var dur = 900, t0 = null;
            var step = function (ts) {
              if (!t0) t0 = ts;
              var p = Math.min((ts - t0) / dur, 1);
              var eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(eased * target) + suffix;
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            cio.unobserve(e.target);
          }
        });
      }, { threshold: 0.6 });
      cio.observe(el);
    });
  }
  runCounters(false);

  /* --- Hero dot-grid parallax --- */
  var heroDots = document.getElementById('heroDots');
  if (heroDots) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        heroDots.style.transform = 'translateY(' + (window.scrollY * 0.12) + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }
})();
