import { useState } from "react";
function MyForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<form>
			<input
				value={name}
				type="text"
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				value={email}
				type="text"
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
		</form>
	);
}

export function App() {
	const [formkey, setFormKey] = useState(1);

	function handleClick() {
		setFormKey((prevKey) => prevKey + 1);
		console.log(formkey);
	}

	return (
		<>
			<MyForm key={formkey} />
			<button onClick={handleClick}>Reset</button>
		</>
	);
}
