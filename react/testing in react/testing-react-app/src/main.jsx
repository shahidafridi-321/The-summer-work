import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Overview } from "./Overview";
import { Setting } from "./Setting";

const router = createBrowserRouter([
	{
		path: "dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "overview",
				element: <Overview />,
			},
			{
				path: "setting",
				element: <Setting />,
			},
		],
	},
	
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
