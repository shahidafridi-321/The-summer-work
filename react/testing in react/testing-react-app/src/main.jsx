import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import Spinach from "./Spinach.jsx";
import Popeye from "./PopEye.jsx";
import { DefaultProfile } from "./DefaultProfile.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "profile",
		element: <Profile />,
		children: [
			{
				index: true,
				element: <DefaultProfile />,
			},
			{
				path: "spinach",
				element: <Spinach />,
			},
			{
				path: "popeye",
				element: <Popeye />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
