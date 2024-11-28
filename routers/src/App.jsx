import { About } from "./About";
import { Contact } from "./Contact";
import { ErrorPage } from "./ErrorPage";
import { Home } from "./Home";
import { MainLayout } from "./MainLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "Home",
				element: <Home />,
			},
			{
				path: "About",
				element: <About />,
			},
			{
				path: "Contact",
				element: <Contact />,
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
