// src/pages/Home.js

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategoryASection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<CategorySection />
			<FeaturedProducts />
			<Footer />
		</div>
	);
}

export default Home;
