import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ButtonTailwind } from "./tailwindcss";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ButtonTailwind>click me</ButtonTailwind>
    <App />
	</StrictMode>
);
