const homeSection = document.getElementById('homeContainer');
const colorBtn = document.getElementById('colorBtn');

if (homeSection && colorBtn) {
  colorBtn.onclick = () => {
    if (homeSection.style.backgroundColor === 'lightblue') {
      homeSection.style.backgroundColor = 'rgba(33, 35, 37, 0.645)';
    } else {
      homeSection.style.backgroundColor = 'lightblue';
    }
  };
}
