import { useState } from "react";
export function Person() {
	const [person, setPerson] = useState({ name: "John", age: 100 });

	// BAD - Don't do this!
	/* const handleIncreaseAge = () => {
		// mutating the current state object
		person.age = person.age + 1;
		setPerson(person);
	};
 */
	// GOOD - Do this!
	const handleIncreaseAge = () => {
		const newPerson = { ...person, age: person.age + 1 };
		setPerson(newPerson);
	};

	return (
		<>
			<h1>{person.name}</h1>
			<h2>{person.age}</h2>
			<button onClick={handleIncreaseAge}>Increase age</button>
		</>
	);
}
