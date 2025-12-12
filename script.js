document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});
