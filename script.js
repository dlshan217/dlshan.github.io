// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

// Mouse parallax on image
const image = document.querySelector(".image-wrapper");

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  image.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
