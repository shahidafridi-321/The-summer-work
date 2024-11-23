import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ItemsList } from "./ItemsList";

describe("App component", () => {
	it("list contains 5 animals", () => {
		// Render the App component
		render(<ItemsList />);
		screen.debug();

		// Locate the list and list items
		const listElement = screen.getByRole("list");
		const listItems = screen.getAllByRole("listitem");

		// Assert that the list is in the document
		expect(listElement).toBeInTheDocument();

		// Assert that the list has the correct class
		expect(listElement).toHaveClass("animals");

		// Assert that the list contains 5 items
		expect(listItems.length).toEqual(5);
	});
});
