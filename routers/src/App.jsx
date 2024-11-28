import { About } from "./About";
import { Home } from "./Home";
import { MainLayout } from "./MainLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
        index:true,
				path: "Home",
				element: <Home />,
			},
			{
				path: "About",
				element: <About />,
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
