import React, { useEffect, useState } from "react";

export const User = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => response.json())
			.then((user) => setUser(user))
			.catch((error) => setError(error));
	}, []);

	if (error) return <span>{error}</span>;
	return (
		<div>
			{user ? (
				<DisplayUser name={user.name} email={user.email} />
			) : (
				<span>Loading...</span>
			)}
		</div>
	);
};

function DisplayUser({ name, email }) {
	return (
		<div className="person">
			<h3>{name}</h3>
			<span>{email}</span>
		</div>
	);
}
