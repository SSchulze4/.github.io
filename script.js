<script>
  const nameEl = document.getElementById('movingName');

  
  let pos = -nameEl.offsetWidth;

  function moveFooter() {
    pos += 2; 
    if (pos > window.innerWidth) {
      pos = -nameEl.offsetWidth; 
    }
    nameEl.style.position = "relative"; 
    nameEl.style.left = pos + "px";
    requestAnimationFrame(moveFooter);
  }

  moveFooter();
</script>
