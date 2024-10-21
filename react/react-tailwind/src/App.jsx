function Button(props) {
	return <button className={props.classes}>{props.text}</button>;
}

export const App = () => {
	return (
		<div className="grid grid-cols-1 place-items-start">
			<Button
				text="Click Me!"
				classes="border-4 font-extrabold border-blue-400 px-4 py-2 rounded-tr-3xl rounded-bl-3xl mt-6 mx-5"
			/>
			<Button
				text="Do not Click Me!"
				classes="border-4 font-extrabold border-red-400 px-4 py-2 rounded-tr-3xl rounded-bl-3xl mt-6 mx-5"
			/>
			<Button
				text="Click it"
				classes="border-4 font-extrabold border-green-400 px-4 py-2 rounded-tr-3xl rounded-bl-3xl mt-6 mx-5"
			/>
		</div>
	);
};
