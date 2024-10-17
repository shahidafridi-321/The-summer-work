import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import { Animals } from "./AnimalsList";
import { ItemsList } from "./ConditionallyReturningJSX";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
	<ItemsList  />
	</StrictMode>
);
