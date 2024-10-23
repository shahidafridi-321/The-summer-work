import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Gallery } from "./ImageCrosal";
/* import  Counter  from "./Counter"; */
/* import { App } from "./App"; */
/* import App from "./BackgroundColorChange"; */
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Gallery />
	</StrictMode>
);
