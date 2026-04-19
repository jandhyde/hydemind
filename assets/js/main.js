// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }

  // Dropdown toggle
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      this.parentElement.classList.toggle('open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownToggle.parentElement.classList.remove('open');
      }
    });
  }

  // Back to top
  const btn = document.getElementById('back-to-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', this.getAttribute('href'));
      }
    });
  });

  // KPI tooltip touch support
  document.querySelectorAll('.kpi-item').forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
})();
