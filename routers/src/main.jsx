import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Phonebook from "./PhoneBook";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Phonebook />
	</StrictMode>
);
