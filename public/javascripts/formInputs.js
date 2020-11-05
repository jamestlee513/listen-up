import { POST, PUT } from "./service.js";

window.addEventListener("DOMContentLoaded", (event) => {
	const form = document.querySelector(".form_container-form");

	form?.addEventListener(
		"input",
		(event) => {
			event.target.style.color = "black";
		},
		true
	);
});

//display stars for rating
window.addEventListener("DOMContentLoaded", () => {
	const stars = document.querySelectorAll(".rating");
	const baseUrl = location.origin;

	for (let star of stars) {
		star.addEventListener("click", (event) => {
			let { rating, podcastId, ratingId } = event.target.dataset;

			console.log("set loading...?");

			if (ratingId) {
				PUT(`${baseUrl}/podcasts/${podcastId}/rating/${ratingId}`, {
					rating,
				})
					.then((res) => console.log("res", res))
					.then(() => console.log("turn loading off?"));
			} else {
				POST(`${baseUrl}/podcasts/${podcastId}/rating`, { rating })
					.then((res) => console.log("res", res))
					.then(() => console.log("turn loading off?"));
			}

			console.log("clicked", rating, podcastId);
		});
	}
});
