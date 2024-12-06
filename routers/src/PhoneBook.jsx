import { useState } from "react";

const Phonebook = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "762626" },
		{ name: "Ada Lovelace", phone: "39-44-5323523" },
		{ name: "Dan Abramov", phone: "12-43-234345" },
		{ name: "Mary Poppendieck", phone: "39-23-6423122" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchName, setSearchName] = useState("");

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handlePhoneChange = (e) => {
		setNewNumber(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (persons.find((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
			setNewNumber("");
		} else {
			setPersons((preValue) => [
				...preValue,
				{ name: newName, phone: newNumber },
			]);
			setNewName("");
			setNewNumber("");
		}
	};

	const handleSearch = (e) => {
		setSearchName(e.target.value);
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().startsWith(searchName)
	);
	

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<p>Filter shown with </p>
				<input onChange={handleSearch} />
			</div>

			<h2>Add a New</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name:{" "}
					<input value={newName} onChange={handleNameChange} type="text" />
				</div>
				<div>
					number :{" "}
					<input value={newNumber} onChange={handlePhoneChange} type="number" />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{filteredPersons.map((person) => (
					<li key={person.name}>
						{person.name} {person.phone}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Phonebook;
