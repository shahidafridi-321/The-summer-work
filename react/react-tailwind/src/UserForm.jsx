import { useState } from "react";

export const UserForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	function handleState(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}
	return (
		<form
			action=""
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div>
				<label htmlFor="firstName">First Name:</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					value={formData.firstName}
					onChange={handleState}
				/>
			</div>
			<div>
				<label htmlFor="lastName">Last Name:</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					value={formData.lastName}
					onChange={handleState}
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleState}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};
