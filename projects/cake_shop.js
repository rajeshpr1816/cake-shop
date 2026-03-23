document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const expanded = navLinks.classList.contains("active");
      toggle.setAttribute("aria-expanded", expanded.toString());
      navLinks.setAttribute("aria-hidden", (!expanded).toString());
    });
  }
});
