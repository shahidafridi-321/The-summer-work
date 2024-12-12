import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Display } from "./Display";
import Phonebook from "./PhoneBook";
import Profile from "./Profle";
import {Image} from "./FetchingData/Image";
import { Posts } from "./FetchingData/Posts";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Display  />
	</StrictMode>
);
