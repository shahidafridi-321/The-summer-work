import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
	const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

	let [colorChangeCounter, setColorChangeCounter] = useState(0);

	const onButtonClick = (color) => () => {
		setBackgroundColor(color);
		setColorChangeCounter(colorChangeCounter + 1);
	};

	return (
		<div
			className="App"
			style={{
				backgroundColor,
			}}
		>
			<h1>{colorChangeCounter} Times The Color Has Been Changed</h1>
			{COLORS.map((color) => (
				<button
					type="button"
					key={color}
					onClick={onButtonClick(color)}
					className={backgroundColor === color ? "selected" : ""}
				>
					{color}
				</button>
			))}
		</div>
	);
}

export default App;
