

document.addEventListener("DOMContentLoaded", () => {
  // Animate hero text fade-in
  const heroText = document.querySelector(".hero-text");
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(40px)";
  setTimeout(() => {
    heroText.style.transition = "opacity 1.2s ease, transform 1.2s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 500);


  const features = document.querySelectorAll(".feature");
  const options = {
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  features.forEach((feature) => {
    feature.classList.add("hidden");
    observer.observe(feature);
  });
});
