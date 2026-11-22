// Mobile menu
var toggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') navLinks.classList.remove('open');
  });
}

// Reveal on scroll: content is visible by default; JS only ADDS the
// hidden state for elements it can observe, so no-JS never blanks content.
if ('IntersectionObserver' in window) {
  var targets = document.querySelectorAll('section .wrap, .card, .arch, .chip');
  targets.forEach(function (el) { el.classList.add('rv'); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('on');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });
}
