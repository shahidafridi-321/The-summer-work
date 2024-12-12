import { useState, useEffect } from "react";

export const useFetchData = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDataForPosts = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/posts?_limit=8",
					{ mode: "cors" }
				);
				if (!response.ok) {
					throw new Error(`HTTP error: status ${response.status}`);
				}
				const postsData = await response.json();        
				setData(postsData);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchDataForPosts();
	}, []);

	return {
		data,
		error,
		loading,
	};
};
