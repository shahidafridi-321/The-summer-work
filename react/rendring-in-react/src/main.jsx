import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Challenge2 } from "../Challenge2";
import { DrinkList } from "../Challenge3";
import { EveryOneElse, Chemists } from "../Chemists";
import Poem from "./Poem";

import { RecipeList } from "./Recipes";

import { RendringListsOfData } from "./RendringListsOfData";

import { Animals } from "./AnimalsList";
import { ItemsList } from "./ConditionallyReturningJSX";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Poem />
	</StrictMode>
);
