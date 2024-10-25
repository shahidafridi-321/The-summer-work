// src/components/CategorySection.js

function CategorySection() {
	const categories = [
		{ id: 1, name: "Electronics", image: "https://via.placeholder.com/300" },
		{ id: 2, name: "Clothing", image: "https://via.placeholder.com/300" },
		{ id: 3, name: "Home", image: "https://via.placeholder.com/300" },
		{ id: 4, name: "Toys", image: "https://via.placeholder.com/300" },
	];

	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{categories.map((category) => (
					<div key={category.id} className="text-center">
						<img
							src={category.image}
							alt={category.name}
							className="rounded-lg w-full"
						/>
						<h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
					</div>
				))}
			</div>
		</section>
	);
}

export default CategorySection;
