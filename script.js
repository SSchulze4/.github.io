document.getElementById('colorBtn').onclick = function () {
  const box = document.getElementById('homeContainer');
  box.style.backgroundColor =
    box.style.backgroundColor === 'rgb(0, 123, 255)' ? '#28a745' : '#007bff';
};
