function Button({ text, classes, handleClick }) {
	return (
		<button onClick={handleClick} className={classes}>
			{text}
		</button>
	);
}

function Link({ text, link }) {
	return (
		<a href={link} className="underline">
			{text}
		</a>
	);
}

export const App = () => {
	function handleClickBtn(url) {
		window.location.href = url;
	}

	function handleLink(url) {
		window.location.href = url;
	}
	return (
		<div className="grid grid-cols-1 place-items-start   max-w-[400px] m-5 rounded-lg p-5 box-border shadow-lg bg-gray-200">
			<Button
				text="Click Me!"
				classes="border-4 font-extrabold border-blue-400 px-4 py-2 rounded-tr-3xl rounded-bl-3xl mt-6 mx-5"
				handleClick={() => {
					handleClickBtn("https:www.google.com");
				}}
			/>
			<Button
				text="Do not Click Me!"
				classes="border-4 font-extrabold border-red-400 px-4 py-2 rounded-tr-3xl rounded-bl-3xl mt-6 mx-5"
				handleClick={() => {
					handleClickBtn("https://www.theodinproject.com");
				}}
			/>
			<Button
				text="Click it"
				classes="border-4 font-extrabold border-green-400 px-4 py-2 rounded-tr-3xl rounded-bl-3xl mt-6 mx-5"
			/>

			<Link
				text={"Link to the odin project"}
				link={"https://www.theodinproject.com"}
			/>

			<Link
				text={"Link to Google"}
				link={"https://www.google.com"}
			/>
		</div>
	);
};
