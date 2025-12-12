document.getElementById("colorBtn").addEventListener("click", () => {
    const home = document.getElementById("homeContainer");

    home.classList.add("fade-hidden");

    setTimeout(() => {
        home.classList.remove("fade-hidden");
    }, 800);
});
