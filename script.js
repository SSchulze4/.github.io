document.getElementById('colorBtn').onclick = function () {
  const body = document.body;
  const current = getComputedStyle(body).backgroundColor;
  
  body.style.backgroundColor =
    current.includes("33, 35, 37") ? "black" : "rgba(33, 35, 37, 0.645)";
};
