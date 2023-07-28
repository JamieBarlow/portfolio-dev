// Slide in animations
const slideElems = document.querySelectorAll(".slide-up, .slide-right, .slide-left");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  })
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

const observer = new IntersectionObserver(callback, options)

slideElems.forEach(elem => {
  observer.observe(elem);
});

// Burger menu
const button = document.querySelector("button");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector('.hamburger');

button.addEventListener("click", () => {
  const currentState = button.getAttribute("data-state");

  if (!currentState || currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
    sidebar.classList.add('active-sidebar');
    hamburger.classList.add('active-burger');
  } else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    sidebar.classList.remove('active-sidebar');
    hamburger.classList.remove('active-burger');
  }
});
