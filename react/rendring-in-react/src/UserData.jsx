import React, { useEffect, useState } from "react";

export const UserData = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			let response = await fetch(
				"https://jsonplaceholder.typicode.com/users/1"
			);
			let result = await response.json();
      console.log(result);
      
			setData(result);
		}
		fetchData();
	}, []);

	return <div>{data ? <p>User Name : {data.name}</p> : <p>Loading...</p>}</div>;
};
