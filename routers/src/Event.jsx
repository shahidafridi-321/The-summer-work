const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div>the app is used by pressing the buttons</div>;
	}

	return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const DebbugingReact = () => {
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);
	const [allClicks, setAll] = useState([]);

	const handleLeftClick = () => {
		setAll(allClicks.concat("L"));
		setLeft(left + 1);
	};

	const handleRightClick = () => {
		setAll(allClicks.concat("R"));
		setRight(right + 1);
	};

	return (
		<div>
			{left}

			<Button handleClick={handleLeftClick} text="left" />
			<Button handleClick={handleRightClick} text="right" />
			{right}
			<History allClicks={allClicks} />
		</div>
	);
};

export const Events = () => {
	const [value, setValue] = useState(10);

	return (
		<div>
			{value}
			<button>reset to zero</button>
		</div>
	);
};
