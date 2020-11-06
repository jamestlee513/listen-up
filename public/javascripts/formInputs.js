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

	//Update listen status (add to playlists)
	//Playlist Update helper function

	function refreshPlaylist(playlistId) {
		parentContainer
			.querySelectorAll(".fa-star")
			.forEach((playlistOption) => {
				let currentPlaylistId = event.target.value;
				if (playlistId !== currentPlaylistId) {
					starEl.classList.remove("fas");
					starEl.classList.add("far");
				} else {
					starEl.classList.remove("far");
					starEl.classList.add("fas");
				}
			});
	}

	//AJAX requests

	const selectPlaylist = document.querySelector(".playlist_select");

	selectPlaylist?.addEventListener("change", (event) => {
		let playlistId = event.target.value;
		let form = event.target.closest("form");
		let podcastId = form.querySelector("#podcastId").value;
		let currentJoinId = form.querySelector("#currentJoinId").value;

		if (currentJoinId) {
			if (!playlistId) {
				console.log("TODO: delete me");
			} else {
				PUT(`${location.origin}/playlists/${playlistId}/podcasts`, {
					currentJoinId,
				}).then((res) => console.log("updated"));
			}
		} else if(playlistId) {
			POST(`${location.origin}/playlists/${playlistId}/podcasts`, {
				podcastId,
			}).then(
				(res) =>
					(form.querySelector("#currentJoinId").value =
						res.newJoin.id)
			);
		}
	});
});

// select on change
// then post ?
