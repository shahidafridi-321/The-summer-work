import { useEffect, useState } from "react";
import axios from "axios";

const Phonebook = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [searchName, setSearchName] = useState("");

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get("http://localhost:3003/persons");
			setPersons(response.data);
		};
		getData();
	}, []);

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
				{ name: newName, number: newNumber },
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
						{person.name} {person.number}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Phonebook;
