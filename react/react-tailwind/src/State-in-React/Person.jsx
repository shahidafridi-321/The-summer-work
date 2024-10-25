import { useState } from "react";
/* export function Person() {
	const [person, setPerson] = useState({
		firstName: "John",
		lastName: "",
		age: 100,
	});

	const handleFirstName = (e) => {
		setPerson({ ...person, firstName: e.target.value });
	};

	const handleLastName = (e) => {
		setPerson({ ...person, lastName: e.target.value });
	};
	const handleIncreaseAge = () => {
		setPerson({ ...person, age: person.age + 1 });
	};

	return (
		<>
			<div>
				First Name :{" "}
				<input
					type="text"
					onChange={(e) => {
						handleFirstName(e);
					}}
					className="bg-red-400"
				/>
			</div>
			<div>
				Last Name :{" "}
				<input
					type="text"
					onChange={(e) => {
						handleLastName(e);
					}}
					className="bg-red-400 my-3"
				/>
			</div>
			<h1>
				{person.firstName} {person.lastName}
			</h1>
			<h2>{person.age}</h2>
			<button onClick={handleIncreaseAge}>Increase age</button>
		</>
	);
}
 */

export function Person() {
	const [person, setPerson] = useState({ firstName: "john", lastName: "" });

	return (
		<p>
			{person.firstName} {person.lastName}
			<FirstNameInput person={person} setPerson={setPerson} />
			<LastNameInput person={person} setPerson={setPerson} />
		</p>
	);
}

function FirstNameInput({ person, setPerson }) {
	const handleFirstName = (e) => {
		setPerson({ ...person, firstName: e.target.value });
	};

	return (
		<div>
			<label htmlFor="">
				First Name:{" "}
				<input type="text" onChange={handleFirstName} className="bg-red-400" />
			</label>
		</div>
	);
}

function LastNameInput({ person, setPerson }) {
	const handleLastName = (e) => {
		setPerson({ ...person, lastName: e.target.value });
	};

	return (
		<div>
			<label htmlFor="">
				last Name:{" "}
				<input type="text" onChange={handleLastName} className="bg-red-400" />
			</label>
		</div>
	);
}
