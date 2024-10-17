function Drunk({ name }) {
	return (
		<section>
			<h1>{name}</h1>
			<dl>
				<dt>Part of plant</dt>
				<dd>{name === "tea" ? "leaf" : "bean"}</dd>
				<dt>Caffeine content</dt>
				<dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
				<dt>Age</dt>
				<dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
			</dl>
		</section>
	);
}

function Drink({ name }) {
	let plant = "leaf";
	let caffeineContent = "15–70 mg/cup";
	let age = "4,000+ years";
	if (name !== "tea") {
		plant = "bean";
		caffeineContent = "0–185 mg/cup";
		age = "1,000+ years";
	}
	return (
		<section>
			<h1>{name}</h1>
			<dl>
				<dt>Part of plant</dt>
				<dd>{plant}</dd>
				<dt>Caffeine content</dt>
				<dd>{caffeineContent}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
			</dl>
		</section>
	);
}

export function DrinkList() {
	return (
		<div>
			<Drink name="tea" />
			<Drink name="coffee" />
		</div>
	);
}
