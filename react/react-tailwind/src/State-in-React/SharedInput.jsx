import { useState } from "react";

export default function SyncedInputs() {
	const [text, setText] = useState("");
	return (
		<>
			<Input
				label="First input"
				onInput={(e) => {
					setText(e.target.value);
				}}
				text={text}
			/>
			<Input
				label="Second input"
				onInput={(e) => {
					setText(e.target.value);
				}}
				text={text}
			/>
		</>
	);
}

function Input({ label, text, onInput }) {
	return (
		<label>
			{label} <input className="bg-red-300" value={text} onChange={onInput} />
		</label>
	);
}
