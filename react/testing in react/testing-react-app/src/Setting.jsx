import React from "react";
import { useOutletContext } from "react-router-dom";

export const Setting = () => {
	const { name } = useOutletContext();
	return (
		<div>
			<h2>Settings</h2>
			<p>Hi {name} , You can update your prefrences here.</p>
		</div>
	);
};
