window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector(".form_container-form");

    form.addEventListener("input", (event) => {
        event.target.style.color = "black";
    }, true);
})