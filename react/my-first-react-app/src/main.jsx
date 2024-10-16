import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Card } from "./Card.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Greeting />
		<Card />
    <Card />
    <Card />
    <Card />
	</StrictMode>
);
