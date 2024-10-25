// src/components/ProductCard.js

function ProductCard({ product }) {
	return (
		<div className="border rounded-md p-4 shadow-md hover:shadow-lg">
			<img
				src={product.image}
				alt={product.name}
				className="w-full rounded-md"
			/>
			<h3 className="mt-4 font-semibold">{product.name}</h3>
			<p className="mt-2 text-blue-600">{product.price}</p>
			<button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
				Add to Cart
			</button>
		</div>
	);
}

export default ProductCard;
