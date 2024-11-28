import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./contact-app/index.css";

import Root from "./contact-app/routes/routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
