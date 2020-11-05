window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector(".navbar_container-form");

    form.addEventListener("input", (event) => {
        event.target.style.color = "rgb(85, 83, 83);";
    }, true);


})