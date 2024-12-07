import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Display } from "./Display";
import Phonebook from "./PhoneBook";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Phonebook />
	</StrictMode>
);
