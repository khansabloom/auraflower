document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("flowerIntro");
  const petals = document.getElementById("floatingPetals");

  // Opening animation
  window.setTimeout(() => {
    intro.classList.add("hide");
  }, 1900);

  // Small floating petals after the intro
  function createPetal() {
    const petal = document.createElement("span");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `-25px`;
    petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 260}px`);
    petal.style.animationDuration = `${7 + Math.random() * 7}s`;
    petal.style.animationDelay = `${Math.random() * 2}s`;
    petal.style.transform = `rotate(${Math.random() * 180}deg) scale(${0.65 + Math.random() * 0.7})`;
    petals.appendChild(petal);
    window.setTimeout(() => petal.remove(), 16000);
  }

  for (let i = 0; i < 12; i++) {
    window.setTimeout(createPetal, i * 280);
  }
  window.setInterval(createPetal, 1800);

  // Scroll reveal
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Gentle parallax on the hero bouquet
  const visual = document.querySelector(".hero-visual");
  window.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 850) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    visual.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Smoothly reset the hero on mouse leave
  document.querySelector(".hero").addEventListener("mouseleave", () => {
    visual.style.transform = "";
  });
});
