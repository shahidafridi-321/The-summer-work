import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import CourseContent from "./Markdown";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CourseContent markdownUrl="https://raw.githubusercontent.com/shahidafridi-321/curriculum/refs/heads/main/intermediate_html_css/intermediate_css_concepts/advanced_selectors.md" />
	</StrictMode>
);
