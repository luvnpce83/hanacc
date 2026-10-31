// Mobile menu and the Ministries dropdown.
(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var subToggle = document.querySelector('.sub-toggle');

  function setNav(open) {
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }
  function setSub(open) {
    subToggle.setAttribute('aria-expanded', String(open));
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      setNav(navToggle.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (subToggle) {
    subToggle.addEventListener('click', function () {
      setSub(subToggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', function (e) {
      if (!subToggle.parentNode.contains(e.target)) setSub(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (subToggle && subToggle.getAttribute('aria-expanded') === 'true') {
      setSub(false);
      subToggle.focus();
    } else if (navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
      setNav(false);
      navToggle.focus();
    }
  });
})();
