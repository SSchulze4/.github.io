const scrollSection = document.getElementById('scrollSection');
if (scrollSection) {
  let pos = scrollSection.parentElement.offsetHeight;

  function scrollSectionFunc() {
    pos -= 1; 
    if (pos + scrollSection.offsetHeight < 0) {
      pos = scrollSection.parentElement.offsetHeight; 
    }
    scrollSection.style.top = pos + "px";
    requestAnimationFrame(scrollSectionFunc);
  }

  scrollSectionFunc();
}
