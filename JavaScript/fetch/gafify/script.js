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

// using chain of promises then()
function fetchResult() {
	fetch(createURL(), {
		mode: "cors",
	})
		.then(function (response) {
			if (!response.ok) {
				throw new Error(`HTTP Error :${response.status}`);
			}
			return response.json();
		})
		.then(function (data) {
			if (
				!data ||
				!data.data ||
				!data.data.images ||
				!data.data.images.original
			) {
				throw new Error("could not find any gifs");
			}
			img.src = data.data.images.original.url;
			search.value = "";
		})
		.catch((error) => {
			console.log("Error", error.message);
		});
}

// using aysnc/await
async function fetchResultUsingAsyncAwait() {
	try {
		let response = await fetch(createURL(), { mode: "cors" });
		if (!response.ok) {
			throw new Error(`HTTP Error :${response.status}`);
		}
		let data = await response.json();
		if (
			!data ||
			!data.data ||
			!data.data.images ||
			!data.data.images.original
		) {
			throw new Error("could not find any gifs");
		}
		img.src = data.data.images.original.url;
		search.value = "";
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
}
//fetchResult();

fetchResultUsingAsyncAwait();

searchBtn.addEventListener("click", () => {
	fetchResultUsingAsyncAwait();
});
