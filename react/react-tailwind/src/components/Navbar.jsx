// src/components/Navbar.js

function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4 bg-white shadow-md">
			<div className="text-2xl font-bold">ShopLogo</div>
			<div className="hidden md:flex space-x-4">
				<a href="#" className="text-gray-700 hover:text-gray-900">
					Home
				</a>
				<a href="#" className="text-gray-700 hover:text-gray-900">
					Categories
				</a>
				<a href="#" className="text-gray-700 hover:text-gray-900">
					Contact
				</a>
			</div>
			<div className="flex space-x-4">
				<button>Profile</button>
				<button>Cart</button>
			</div>
		</nav>
	);
}

export default Navbar;
