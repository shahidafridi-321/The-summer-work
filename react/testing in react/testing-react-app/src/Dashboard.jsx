import React from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
	const userInfo = {
		name: "shahid",
		email: "shahidafridisa321@gmail.com",
		role: "Admin",
	};
	return (
		<div>
			<h1>Dashboard</h1>
			<p>This is the parent component where the state is managed</p>
			<Outlet context={userInfo} />
		</div>
	);
};
