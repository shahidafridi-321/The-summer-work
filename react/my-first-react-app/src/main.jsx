import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Card } from "./Card.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Greeting />
		<Card name="No 01"/>
    <Card name="No 02"/>
    <Card name="No 03"/>
    <Card name="No 04"/>
	</StrictMode>
);
