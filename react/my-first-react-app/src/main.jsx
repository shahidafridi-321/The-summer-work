import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Card } from "./Card.jsx"; */

import { Rules } from "./Rules";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Rules />
	</StrictMode>
);
