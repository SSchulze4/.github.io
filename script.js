document.getElementById('colorBtn').onclick = function () {
  const box = document.getElementById('homeContainer');
  const current = getComputedStyle(box).backgroundColor;
  
  box.style.backgroundColor =
    current.includes('0, 123, 255') ? '#28a745' : '#007bff';
};
