window.addEventListener("DOMContentLoaded", (event) => {
    const footer = document.querySelector(".main_section-footer");

    footer.addEventListener(
        "input",
        (event) => {
            event.target.style.color = "black";
        },
        true
    );
});
