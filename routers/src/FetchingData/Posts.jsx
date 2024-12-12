import React from "react";
import { useFetchData } from "./fetchData";
export const Posts = () => {
	const { data, error, loading } = useFetchData();

	return (
		<div className="flex">
			<div className="w-52 sm:w-80 flex justify-center items-center">
				{loading && <div className="text-xl font-medium">Loading posts...</div>}
				{error && <div className="text-red-700">{error}</div>}

				<ul>
					{data &&
						data.map(({ id, title }) => (
							<li
								key={id}
								className="border-b border-gray-100 text-sm sm:text-base"
							>
								<a
									className="p-4 block hover:bg-gray-100"
									href={`/posts/${id}`}
								>
									{title}
								</a>
							</li>
						))}
				</ul>
			</div>

			<div className="bg-gray-100 flex-1 p-4 min-h-[550px]">
				Single post here...
			</div>
		</div>
	);
};
