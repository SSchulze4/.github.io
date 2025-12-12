document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById('movingName');

  if (!nameEl) return; // prevent errors on pages without footer

  let pos = -300;

  function move() {
    pos += 2; // speed
    if (pos > window.innerWidth) {
      pos = -nameEl.offsetWidth; // restart left side
    }
    nameEl.style.left = pos + "px";
    requestAnimationFrame(move);
  }

  move();
});
