const searchBarContainerE1 = document.querySelector(".search-bar-container");

const magnifierE1 = document.querySelector(".fas");

magnifierE1.addEventListener("click", () => {
  searchBarContainerE1.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", (event) => {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
