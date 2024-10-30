import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Room } from "./UseEffectWorking";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Room />
	</StrictMode>
);
