document.addEventListener('DOMContentLoaded', function () {
  const colorBtn = document.getElementById('colorBtn');
  const homeContainer = document.getElementById('homeContainer');

  if (colorBtn && homeContainer) {
    colorBtn.addEventListener('click', function () {
     
      const randomColor = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.7)`;
      homeContainer.style.backgroundColor = randomColor;
    });
  }
});
