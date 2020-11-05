window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".navbar_container-form");


	if (!form) return;


	form.addEventListener(
		"input",
		(event) => {
			event.target.style.color = "black";
		},
		true
	);
});
