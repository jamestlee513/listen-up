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

	function refreshStars(rating) {
		const parentContainer = document.querySelector(
			`.star_container[data-podcast-id="${rating.podcastId}"]`
		);
		if (!parentContainer) return;
		parentContainer.querySelectorAll(".fa-star").forEach((starEl) => {
			const starRating = starEl.dataset.rating;
			if (starRating > rating.rating) {
				starEl.classList.remove("fas");
				starEl.classList.add("far");
			} else {
				starEl.classList.remove("far");
				starEl.classList.add("fas");
			}
		});
	}

	for (let star of stars) {
		star.addEventListener("click", (event) => {
			let { rating, podcastId, ratingId } = event.target.dataset;

			if (ratingId) {
				PUT(`${baseUrl}/podcasts/${podcastId}/rating/${ratingId}`, {
					rating,
				}).then((res) => refreshStars(res.rating));
			} else {
				POST(`${baseUrl}/podcasts/${podcastId}/rating`, {
					rating,
				}).then((res) => refreshStars(res.rating));
			}
		});
	}
});
