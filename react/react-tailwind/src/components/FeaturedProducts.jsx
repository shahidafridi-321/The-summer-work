// src/components/FeaturedProducts.js

import ProductCard from "./ProductCard";

function FeaturedProducts() {
	const products = [
		{
			id: 1,
			name: "Product 1",
			price: "$100",
			image: "https://via.placeholder.com/150",
		},
		{
			id: 2,
			name: "Product 2",
			price: "$200",
			image: "https://via.placeholder.com/150",
		},
		{
			id: 3,
			name: "Product 3",
			price: "$300",
			image: "https://via.placeholder.com/150",
		},
		{
			id: 4,
			name: "Product 4",
			price: "$400",
			image: "https://via.placeholder.com/150",
		},
	];

	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
			<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}

export default FeaturedProducts;
