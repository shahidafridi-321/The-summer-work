const img = document.querySelector("img");
const searchBtn = document.querySelector(".search-btn");

function createURL() {
	let url = "";
	const key = "odqGQWX9f2UPXsnCC1GvRuYVXMPCjAl1";
	const search = document.querySelector(".search").value;
	if (search !== "") {
		url = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`;
	} else {
		url = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=cat`;
	}
	return url;
}

function fetchResult() {
	fetch(createURL(), {
		mode: "cors",
	})
		.then(function (response) {
			if (!response.ok) {
				throw new Error(`HTTP Error :${response.status}`);
			} else if (response.length === 0) {
				throw new Error(`Could not find any gifs`);
			}
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		})
		.then(() => {
			search.value = "";
		})
		.catch((error) => {
			console.log("Not Found", error);
		});
}
fetchResult();

searchBtn.addEventListener("click", () => {
	fetchResult();
});
