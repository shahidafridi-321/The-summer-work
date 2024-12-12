import { useState, useEffect } from "react";

export const useImageURL = () => {
	const [imageUrl, setImageUrl] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/photos",
					{ mode: "cors" }
				);

				if (response.status >= 400) {
					throw new Error("server Error");
				}
				const json = await response.json();
				setImageUrl(json[100].url);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return {
		imageUrl,
		error,
		loading,
	};
};
