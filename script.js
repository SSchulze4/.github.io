document.addEventListener("DOMContentLoaded", function () {
  const colorBtn = document.getElementById("colorBtn");

  if (colorBtn) {
    colorBtn.addEventListener("click", function () {
      const container = document.querySelector(".container");
      
      if (container.style.backgroundColor === "lightblue") {
        container.style.backgroundColor = "rgba(33, 35, 37, 0.645)";
      } else {
        container.style.backgroundColor = "lightblue";
      }
    });
  }
});
