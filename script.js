document.addEventListener("DOMContentLoaded", function () {


  const colorBtn = document.getElementById("colorBtn");
  if (colorBtn) {
    colorBtn.addEventListener("click", function () {
     
      document.body.classList.toggle("bg-primary");
      
      document.body.classList.toggle("text-light");
    });
