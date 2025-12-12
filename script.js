const nameEl = document.getElementById('movingName');
let pos = -200;

function move() {
  pos += 2;
  if (pos > window.innerWidth) pos = -nameEl.offsetWidth;
  nameEl.style.left = pos + "px";
  requestAnimationFrame(move);
}
