const page = document.getElementById('pageContent');
if (page) {
  let pos = page.parentElement.offsetHeight; // start below the container

  function scrollPage() {
    pos -= 1; // scroll speed
    if (pos + page.offsetHeight < 0) {
      pos = page.parentElement.offsetHeight; // reset to bottom
    }
    page.style.top = pos + "px";
    requestAnimationFrame(scrollPage);
  }

  scrollPage();
}
