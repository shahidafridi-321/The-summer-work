import React from "react";
import { useImageURL } from "./imageUrl";
export const Image = () => {
	const { imageUrl, error, loading } = useImageURL();
	if (loading) return <h1>Loadig.....</h1>;
	if (error) return <p>{error}</p>;
	return (
		<>
			<h1>This is an imageee</h1>
			<img src={imageUrl} alt="an image" />
		</>
	);
};
