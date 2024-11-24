import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ItemsList } from "./ItemsList.jsx";
import { User } from "./User.jsx";
import { CustomButton } from "./CustomButton.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CustomButton onClick={handleClick} />
	</StrictMode>
);

function handleClick() {
	console.log("clicked");
}
