import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";
/* import { Gallery } from "./ImageCrosal"; */
/* import  Counter  from "./Counter"; */
/* import { App } from "./App"; */
/* import App from "./BackgroundColorChange"; */
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Form />
	</StrictMode>
);
