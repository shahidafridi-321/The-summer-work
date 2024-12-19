/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				darkBg: "#111827",
				getStartedBtn: "#0f766e",
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							color: "#1f2937", // Change the color of h1 tags
							fontWeight: "700", // Make h1 bold
						},
						pre: {
							background: "blue",
						},
						h3: {
							color: "red",
						},
						a: {
							color: "#3b82f6", // Customize link colors
							"&:hover": {
								color: "#2563eb", // Darken on hover
							},
						},
						p: {
							color: "#ffffff",
						},

						code: {
							fontSize: "40px",
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
