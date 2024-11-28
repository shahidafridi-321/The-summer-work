import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const styles = {
  height:"100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",


};

export const MainLayout = () => {
	return (
		<div style={styles}>
			<Navbar />
			<Footer />
		</div>
	);
};
