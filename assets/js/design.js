// Navbar intersection changes
const header = document.querySelector('header');
const headerLogos = document.querySelectorAll(
  '.header__name > a, .header__logo, .header__bracket, .menu-button'
);
const heroHeadline = document.querySelector('.hero__image');
const socialIcons = document.querySelector('.header__icons');
const tablet = window.matchMedia('(min-width: 600px)');
// const scrollWatcher = document.createElement('div');
// scrollWatcher.setAttribute('data-scroll-watcher', '');
// header.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    header.classList.toggle('sticking', !entries[0].isIntersecting);
    headerLogos.forEach((logo) => {
      logo.classList.toggle('whiteOnBlack', !entries[0].isIntersecting);
    });
    if (!tablet.matches) {
      socialIcons.classList.toggle('invisible', !entries[0].isIntersecting);
    }
  },
  { root: null, rootMargin: '-40px', threshold: 0.8 }
);

navObserver.observe(heroHeadline);

// Slide in animations
const slideElems = document.querySelectorAll(
  '.slide-up, .slide-right, .slide-left'
);

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const slideOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const observer = new IntersectionObserver(callback, slideOptions);

slideElems.forEach((elem) => {
  observer.observe(elem);
});

// Burger menu
const button = document.querySelector('button');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');

button.addEventListener('click', () => {
  const currentState = button.getAttribute('data-state');

  if (!currentState || currentState === 'closed') {
    button.setAttribute('data-state', 'opened');
    button.setAttribute('aria-expanded', 'true');
    sidebar.classList.add('active-sidebar');
    hamburger.classList.add('active-burger');
  } else {
    button.setAttribute('data-state', 'closed');
    button.setAttribute('aria-expanded', 'false');
    sidebar.classList.remove('active-sidebar');
    hamburger.classList.remove('active-burger');
  }
});
