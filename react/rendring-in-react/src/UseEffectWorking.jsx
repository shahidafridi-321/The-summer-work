import { useEffect, useState } from "react";

const serverUrl = "https://localhost:1234";

function Chat({ roomId }) {
	useEffect(() => {
		const connection = createConnection(serverUrl, roomId);
		connection.connect();

		return () => connection.disconnect();
	}, [roomId]);

	return (
		<div>
			<h1>Welcome to the {roomId} room!</h1>
		</div>
	);
}

export function Room() {
	const [roomId, setRoomId] = useState("general");
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {}, [isOpen]);

	const handleClick = () => {
		setOpen(!isOpen);
	};
	return (
		<div>
			Choose the chat room:
			<select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
				<option value="general">general</option>
				<option value="travel">travel</option>
				<option value="music">music</option>
			</select>
			<button onClick={handleClick}>
				{isOpen ? "close chat" : "open chat"}
			</button>
			{isOpen && <hr />}
			{isOpen && <Chat roomId={roomId} />}
		</div>
	);
}

function createConnection(serverUrl, roomId) {
	return {
		connect() {
			console.log(
				'✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
			);
		},
		disconnect() {
			console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
		},
	};
}
