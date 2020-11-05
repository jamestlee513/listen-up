// fetch helpers
const checkStatus = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	throw new Error(response.statusText);
};

const parseJSON = (payload) => {
	if (typeof payload === "string") {
		return JSON.parse(payload);
	}
	return payload.json();
};

// actual calls

export const POST = (url, payload) =>
	fetch(url, {
		method: "POST",
		credentials: "same-origin", // includes cookies
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
		.then(checkStatus)
		.then(parseJSON);
