import { useState } from "react";

const todos = [
	{ task: "mow the yard", id: crypto.randomUUID() },
	{ task: "Work on Odin Projects", id: crypto.randomUUID() },
	{ task: "feed the cat", id: crypto.randomUUID() },
];

const App = () => {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.task}</li>
			))}
		</ul>
	);
};

export default App;
