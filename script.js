document.addEventListener('DOMContentLoaded', function () {

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile menu toggle */
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close menu after tapping a link (mobile) */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* WhatsApp prefilled messages per section */
  var whatsappMessages = {
    general: "Hi Fesii Digital Services, I'd like to know more about your services.",
    social: "Hi, I'm interested in your Social Media Management service. Can we discuss?",
    web: "Hi, I'm interested in Web Development / Landing Pages. Can we discuss?",
    automation: "Hi, I'm interested in Automation & Digital Marketing (n8n). Can we discuss?"
  };

  document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
    var key = el.getAttribute('data-whatsapp');
    var message = whatsappMessages[key] || whatsappMessages.general;
    var currentHref = el.getAttribute('href') || '';
    // Only append text if href is a real wa.me link (not a placeholder "#")
    if (currentHref.indexOf('wa.me') !== -1) {
      var separator = currentHref.indexOf('?') !== -1 ? '&' : '?';
      el.setAttribute('href', currentHref + separator + 'text=' + encodeURIComponent(message));
    }
  });

  /* Smooth scroll for in-page anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
