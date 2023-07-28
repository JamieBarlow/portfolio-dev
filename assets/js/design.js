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

const upObserver = new IntersectionObserver(callback, options)
const rightObserver = new IntersectionObserver(callback, options);
const leftObserver = new IntersectionObserver(callback, options);


slideElems.forEach(elem => {
    if (elem.classList.contains("slide-up")) {
        upObserver.observe(elem);
    } else if (elem.classList.contains("slide-right")) {
        rightObserver.observe(elem);
    } else if (elem.classList.contains("slide-left")) {
        leftObserver.observe(elem);
    }
});