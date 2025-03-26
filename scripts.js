document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fade-in");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;

            if (imageTop < triggerBottom) {
                image.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Llamada inicial para las imágenes ya visibles
});
