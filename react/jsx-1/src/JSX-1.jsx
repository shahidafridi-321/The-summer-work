export function TodoList() {
	return (
		<div>
			<h1>Hedy Lamarr&apos;s Todos</h1>
			<img
				src="https://i.imgur.com/yXOvdOSs.jpg"
				alt="Hedy Lamarr"
				className="photo"
			></img>
			<ul>
				<li>Invent new traffic lights</li>
				<li>Rehearse a movie scene</li>
				<li>Improve the spectrum technology</li>
			</ul>
		</div>
	);
}

export function Challenge1() {
	return (
		<div>
			<div className="intro">
				<h1>Welcome to my website!</h1>
			</div>
			<p className="summary">
				You can find my thoughts here.
				<br />
				<br />
				<b>
					And <i>pictures </i>
				</b>{" "}
				of scientists!
			</p>
		</div>
	);
}

export function Avator() {
	const avator = "https://i.imgur.com/7vQD0fPs.jpg";
	const description = "This is an old man image";

	return <img src={avator} alt={description} className="avatar" />;
}

export function Name() {
	let name = "Boom Boom";
	return <h3> {name}, How are?</h3>;
}

let today = new Date();
function formatDate(date) {
	return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function FullDayName() {
	return <h1>It&apos;s {formatDate(today)} today</h1>;
}
