export default function FeedbackForm2() {
	function handleClick() {
		let name = prompt("What is your name?");
		alert(`Hello, ${name}!`);
	}

	return <button onClick={handleClick}>Greet</button>;
}