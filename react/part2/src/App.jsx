import { useState } from "react";

const App = () => {
	let [counter, setCounter] = useState(0);
	return <div>{counter}</div>;
};

export default App;
