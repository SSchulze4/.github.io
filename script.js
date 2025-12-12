document.getElementById("colorBtn").onclick = function () {
  const container = document.getElementById("homeContainer");

  container.classList.add("fade-out");

  setTimeout(() => {
    container.classList.remove("fade-out");
  }, 800);
};
