import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Lessons } from "./Lessons";
import { LessonsDetail } from "./LessonsDetail";

const router = createBrowserRouter([
	{
		path: "/lessons",
		element: <Lessons />,
		children: [{ path: ":topicId", element: <LessonsDetail /> }],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
