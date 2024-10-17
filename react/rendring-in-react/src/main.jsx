import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Challenge2 } from "../Challenge2";
import { DrinkList } from "../Challenge3";

import { Animals } from "./AnimalsList";
import { ItemsList } from "./ConditionallyReturningJSX";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<DrinkList />
	</StrictMode>
);
