/* import React, { useState } from "react";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="bg-gray-700 text-white fixed  w-full">
			<div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex flex-row w-full   justify-between">
						<div className="font-bold text-xl">ShopSHop</div>
						<div className="hidden md:block">
							<ul className="flex ml-10 items-baseline space-x-8">
								<li className="text-gray-100  border border-gray-200 font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-xl transition duration-300">
									<a href="#" className=" ">
										Home
									</a>
								</li>
								<li className="text-gray-100  border border-gray-200  font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-xl transition duration-300">
									<a href="#">Shop</a>
								</li>
								<li className="text-gray-100  border border-gray-200  font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-xl transitioHomen duration-300">
									<a href="#">Cart</a>
								</li>
							</ul>
						</div>
						<div className="md:hidden">
							<button
								className="fill-gray-100"
								onClick={() => setIsOpen(!isOpen)}
							>
								<ul>
									<li>___</li>
									<li>___</li>
									<li>___</li>
								</ul>
							</button>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<ul className="flex flex-col  gap-y-2 px-4 sm:px-6 pb-2 md:hidden">
					<li className="text-gray-100  border border-gray-200 font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-xl transition duration-300">
						<a href="#" className=" ">
							Home
						</a>
					</li>
					<li className="text-gray-100  border border-gray-200  font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-xl transition duration-300">
						<a href="#">Shop</a>
					</li>
					<li className="text-gray-100  border border-gray-200  font-bold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-xl transitioHomen duration-300">
						<a href="#">Cart</a>
					</li>
				</ul>
			)}
		</nav>
	);
};
 */

import React, { useState } from "react";
import { Button } from "./Button";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="bg-darkBg text-gray-100 fixed w-full border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex w-full  justify-center items-center h-16 lg:h-20">
					<div className="flex w-full flex-row justify-between items-center">
						<div className="">
							<img
								className="w-10 lg:w-12 transition-all duration-300"
								src="../public/odin-icon-22b41941.svg"
								alt="logo"
							/>
						</div>
						<div className="hidden md:block">
							<ul className="flex ml-10 items-baseline space-x-8">
								<li className="hover:border-b-2 border-white">
									<a href="">All Paths</a>
								</li>
								<li className="hover:border-b-2 border-white">
									<a href="">About</a>
								</li>
								<li className="hover:border-b-2 border-white">
									<a href="">Community</a>
								</li>
								<li className="hover:border-b-2 border-white">
									<a href="">Support Us</a>
								</li>
								<li className="hover:border-b-2 border-white">
									<a href="">Sign In</a>
								</li>
								<li className="hover:border-b-2 border-white">
									<a href="" className="">
										Dark
									</a>
								</li>
								<li>
									<Button
										text="Get Started"
										classes=" bg-getStartedBtn px-2 py-2 rounded-md hover:bg-green-900"
									/>
								</li>
							</ul>
						</div>
						<div className="md:hidden">
							<button onClick={() => setIsOpen(!isOpen)}>
								<img src="../public/humberger.png" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
			{isOpen && <p>Open is </p>}
		</nav>
	);
};
