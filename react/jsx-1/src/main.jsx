import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TodoList } from "./JSX-1";

import { Challenge1, Avator, Name ,FullDayName , Profile} from "./JSX-1";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TodoList />
		<Challenge1 />

		<Avator />
		<Name />
		<FullDayName/>
		<Profile/>
	</StrictMode>
);
