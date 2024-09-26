let url =
	"https://raw.githubusercontent.com/shahidafridi-321/curriculum/refs/heads/main/javascript/computer_science/project_binary_search_trees.md";

async function getMarkdownFile(url) {
	let response = await fetch(url);
	let markdownText = await response.text();
	return markdownText;
}

// Render markdown text to HTML
async function renderMarkdowntext(url) {
	const md = window.markdownit();
	let markdownText = await getMarkdownFile(url);
	let htmlContent = md.render(markdownText);
	document.querySelector(".content").innerHTML = htmlContent;
}

// Call the function to render the markdown content from the URL
renderMarkdowntext(url);
