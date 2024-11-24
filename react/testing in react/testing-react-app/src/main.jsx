import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Email } from "./Email.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Email email="shahid@gmail.com"/>
	</StrictMode>
);
