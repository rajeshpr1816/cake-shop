
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");
   themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

