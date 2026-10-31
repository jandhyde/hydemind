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

  // Dropdown toggles (supports multiple dropdowns)
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      const expanded = this.getAttribute('aria-expanded') === 'true';

      // Close all other dropdowns first
      dropdownToggles.forEach(function (other) {
        if (other !== toggle) {
          other.setAttribute('aria-expanded', 'false');
          other.parentElement.classList.remove('open');
        }
      });

      this.setAttribute('aria-expanded', !expanded);
      parent.classList.toggle('open');
    });
  });

  // Close all dropdowns on outside click
  if (dropdownToggles.length) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        dropdownToggles.forEach(function (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.parentElement.classList.remove('open');
        });
      }
    });
  }

  // Escape closes open dropdowns and the mobile menu
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    dropdownToggles.forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
      t.parentElement.classList.remove('open');
    });
    if (toggle && nav && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

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

  // Resource tables: show Type and Cost cells as chips (styling only)
  document.querySelectorAll('.pillar-content table').forEach(function (table) {
    var heads = Array.prototype.map.call(table.querySelectorAll('thead th'), function (th) {
      return th.textContent.trim().toLowerCase();
    });
    heads.forEach(function (h, i) {
      if (h !== 'type' && h !== 'cost') return;
      table.querySelectorAll('tbody tr').forEach(function (tr) {
        var td = tr.children[i];
        if (!td || td.querySelector('*') || !td.textContent.trim()) return;
        var span = document.createElement('span');
        span.className = 'chip';
        span.textContent = td.textContent.trim();
        td.textContent = '';
        td.appendChild(span);
      });
    });
  });

  // On-this-page: mark the section currently in view
  var tocLinks = document.querySelectorAll('.pillar-toc a[href^="#"]');
  if (tocLinks.length) {
    var byId = {};
    var targets = [];
    tocLinks.forEach(function (a) {
      var el = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
      if (el) { byId[el.id] = a; targets.push(el); }
    });
    var currentId = null;
    var update = function () {
      var line = window.innerHeight * 0.3;
      var id = targets.length ? targets[0].id : null;
      targets.forEach(function (el) { if (el.getBoundingClientRect().top <= line) id = el.id; });
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 2 && targets.length) {
        id = targets[targets.length - 1].id;
      }
      if (id === currentId) return;
      currentId = id;
      tocLinks.forEach(function (a) { a.classList.remove('is-current'); a.removeAttribute('aria-current'); });
      if (byId[id]) { byId[id].classList.add('is-current'); byId[id].setAttribute('aria-current', 'true'); }
    };
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
