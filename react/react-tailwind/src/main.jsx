import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import Form from "./Form"; */
/* import { Gallery } from "./ImageCrosal"; */
/* import  Counter  from "./Counter"; */
/* import { App } from "./App"; */
/* import App from "./BackgroundColorChange"; */
/* import { Person } from "./State-in-React/Person"; */
import "./index.css";
import { CustomInput } from "./State-in-React/CustomInput";
/* import FeedbackForm2 from "./FeedbackForm2"; */

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CustomInput />
	</StrictMode>
);
