const images = [
    "first.png",
    "second.png",
  ];

  let index = 0;
const gridImage = document.getElementById("sie");

setInterval(() => {
  index = (index + 1) % images.length;
  gridImage.src = images[index];
}, 500);


