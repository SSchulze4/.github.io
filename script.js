document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.getElementById("colorBtn");
  const homeContainer = document.getElementById("homeContainer");

  if (colorBtn && homeContainer) {
    colorBtn.addEventListener("click", () => {
      if (homeContainer.style.backgroundColor === "rgba(0, 122, 204, 0.7)") {
        homeContainer.style.backgroundColor = "rgba(33, 35, 37, 0.645)";
      } else {
        homeContainer.style.backgroundColor = "rgba(0, 122, 204, 0.7)";
      }
    });
  }
});
