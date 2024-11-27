import App from "./App";
import Profile from "./Profile";
import { ErrorPage } from "./ErrorPage";

export const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "profile/:name",
		element: <Profile />,
	},
];
