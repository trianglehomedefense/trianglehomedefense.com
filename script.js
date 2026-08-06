const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  const label = navToggle.querySelector('.sr-only');

  const setMenuState = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    if (label) label.textContent = open ? 'Close menu' : 'Open menu';
  };

  navToggle.addEventListener('click', () => {
    setMenuState(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) setMenuState(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      navToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      navToggle.getAttribute('aria-expanded') === 'true' &&
      event.target instanceof Node &&
      !nav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1060) setMenuState(false);
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
