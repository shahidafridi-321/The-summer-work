import React from "react";
import { Link } from "react-router-dom";
import { topics } from "./topics";
import { useParams } from "react-router-dom";
export const LessonsDetail = () => {
	const { topicId } = useParams();

	const topic = topics.find((topic) => topic.id === topicId);
	if (!topic) return <p>Topic not found!</p>;

	return (
		<div>
			<h2>{topic.title}</h2>
			<p>{topic.content}</p>
			<Link to="/lessons">Back to Lesons</Link>
		</div>
	);
};
