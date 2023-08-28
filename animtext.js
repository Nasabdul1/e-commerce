const texts = ["Iconic", "Comfortable", "Quality", "Elegant", "Stylish"];

let index = 0;

setInterval(() => {
  document.getElementById("changing-text").textContent = texts[index];
  index = (index + 1) % texts.length;
}, 2000);
