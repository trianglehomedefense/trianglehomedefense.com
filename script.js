const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const noteTabs = document.querySelectorAll('[data-note-tab]');
const notePanels = document.querySelectorAll('[data-note-panel]');

noteTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-note-tab');

    noteTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    notePanels.forEach((panel) => {
      const isActive = panel.getAttribute('data-note-panel') === target;
      panel.classList.toggle('is-active', isActive);
      panel.toggleAttribute('hidden', !isActive);
    });
  });
});
