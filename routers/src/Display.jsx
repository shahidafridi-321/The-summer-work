import React, { useState } from "react";
import { Notes } from "./Notes";

export const Display = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState("new note ....");
	const [showAll, setShowAll] = useState(false);

	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important === true);

	const handleNoteChange = (e) => {
		setNewNote(e.target.value);
	};

	const handleSave = (e) => {
		e.preventDefault();

		setNotes((prevValue) => [
			...prevValue,
			{
				content: newNote,
				important: Math.random < 0.5,
				id: String(notes.length + 1),
			},
		]);
		setNewNote("");
	};

	return (
		<div>
			<h1>Notes</h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					{showAll ? "important" : "All"}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Notes key={note.id} note={note.content} />
				))}
			</ul>
			<form
				onSubmit={(e) => {
					handleSave(e);
				}}
			>
				<input
					value={newNote}
					onChange={(e) => {
						handleNoteChange(e);
					}}
				/>
				<button type="submit">Save</button>
			</form>
		</div>
	);
};
