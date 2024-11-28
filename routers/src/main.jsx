import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainLayout } from "./MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
