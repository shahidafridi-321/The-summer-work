import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
export const Overview = () => {
	const { name, email, role } = useOutletContext();
	return (
		<div>
			<h2>Overview</h2>
			<p>Welcome {name}</p>
			<p>Your email is: {email}</p>
			<p>Your role is: {role}</p>
		</div>
	);
};
