import React from "react";
import { topics } from "./topics";
import { Link, Outlet } from "react-router-dom";

export const Lessons = () => {
	return (
		<div>
			<h1>React Basics!</h1>
			<ul>
				{topics.map((topic) => (
					<li key={topic.id}>
						<Link to={topic.id}>{topic.title}</Link>
					</li>
				))}
			</ul>
			<hr />
			<Outlet />
		</div>
	);
};
