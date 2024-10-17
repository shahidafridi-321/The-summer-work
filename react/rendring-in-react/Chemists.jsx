function getImageUrl(person) {
	return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

const people = [
	{
		id: 0,
		name: "Creola Katherine Johnson",
		profession: "mathematician",
		accomplishment: "spaceflight calculations",
		imageId: "MK3eW3A",
	},
	{
		id: 1,
		name: "Mario José Molina-Pasquel Henríquez",
		profession: "chemist",
		accomplishment: "discovery of Arctic ozone hole",
		imageId: "mynHUSa",
	},
	{
		id: 2,
		name: "Mohammad Abdus Salam",
		profession: "physicist",
		accomplishment: "electromagnetism theory",
		imageId: "bE7W1ji",
	},
	{
		id: 3,
		name: "Percy Lavon Julian",
		profession: "chemist",
		accomplishment:
			"pioneering cortisone drugs, steroids and birth control pills",
		imageId: "IOjWm71",
	},
	{
		id: 4,
		name: "Subrahmanyan Chandrasekhar",
		profession: "astrophysicist",
		accomplishment: "white dwarf star mass calculations",
		imageId: "lrWQx8l",
	},
];

export function Chemists() {
	let Chemists = people.filter((person) => person.profession === "chemist");
	let ItemsList = Chemists.map((person) => (
		<li key={Chemists.id}>
			<img src={getImageUrl(person)} alt={person.name} />
			<p>
				{person.name}:{" " + person.profession + " "} known for{" "}
				{person.accomplishment}
			</p>
		</li>
	));

	return (
		<div>
			<h1>Chemists</h1>
			<ul>{ItemsList}</ul>
		</div>
	);
}

export function EveryOneElse() {
	let EveryOneElse = people.filter((person) => person.profession !== "chemist");
	let ItemsList = EveryOneElse.map((person) => (
		<li key={EveryOneElse.id}>
			<img src={getImageUrl(person)} alt={person.name} />
			<p>
				{person.name}:{" " + person.profession + " "} known for{" "}
				{person.accomplishment}
			</p>
		</li>
	));

	return (
		<div>
			<h1>EveryOneElse</h1>
			<ul>{ItemsList}</ul>
		</div>
	);
}
