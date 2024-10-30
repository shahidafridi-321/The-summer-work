import React, { useEffect, useState } from "react";

export const Clock = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		let key = setInterval(() => {
			setCounter((count) => count + 1);
		}, 1000);

		return () => clearInterval(key);
	});
	return (
		<div>
			<p>{counter} seconds have passed </p>
		</div>
	);
};
