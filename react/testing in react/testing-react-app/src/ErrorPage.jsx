import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
	return (
		<div>
			<h1>Oh no, this route doesn&apos;t exist!</h1>
			<Link to="/">Go back to home page</Link>
		</div>
	);
};
