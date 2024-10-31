import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import { App } from "./FromReset";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
