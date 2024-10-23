import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	function onClickCounter() {
		setCounter(counter + 1);
	}
	return (
		<div>
			<p className="text-3xl text-gray-400">{counter}</p>
			<button
				onClick={onClickCounter}
				className="px-3 py-2 text-white bg-black rounded-full font-bold text-center "
			>
				Increament
			</button>
		</div>
	);
};

export default Counter;
