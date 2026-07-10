const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const classes = entry.target.classList;

    let animationClass = "";
    if (classes.contains("fade-left")) animationClass = "enableFadeLeft";
    else if (classes.contains("fade-right")) animationClass = "enableFadeRight";
    else if (classes.contains("fade-up")) animationClass = "enableFadeUp";
    else if (classes.contains("fade-in")) animationClass = "enableFadeIn";
    else if (classes.contains("progress-bar-animation"))
      animationClass = "enableProgressBarAnimation";

    if (entry.isIntersecting) {
      entry.target.classList.add(animationClass);
    }
  });
});

const animatedElements = document.querySelectorAll(
  ".fade-left, .fade-right, .fade-up, .fade-in, .progress-bar-animation",
);
animatedElements.forEach((el) => observer.observe(el));

var typed = new Typed(".auto-type", {
  strings: ["Long Rithy"],
  typeSpeed: 100,
  backSpeed: 100,
  cursor: false,
  loop: true,
});
