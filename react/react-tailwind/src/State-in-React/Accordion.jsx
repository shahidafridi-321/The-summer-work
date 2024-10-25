import { useState } from "react";

function Panel({ title, children }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<section className="bg-gray-300 border rounded-lg max-w-sm p-5 text-center">
			<h3 className="text-2xl text-blue-500">{title}</h3>
			{isActive ? (
				<p className="text-[14px] text-gray-800 text-left">{children}</p>
			) : (
				<button
					className="px-4 py-2 font-bold text-gray-800 border-gray-950 border-2 rounded-full mx-auto my-5"
					onClick={() => setIsActive(true)}
				>
					Show
				</button>
			)}
		</section>
	);
}

export function Accordion() {
	return (
		<>
			<h1 className="text-blue-800">Almaty, Kazakhstan</h1>
			<Panel title="About">
				With a population of about 2 million, Almaty is Kazakhstan&apos;s largest
				city. From 1929 to 1997, it was its capital city.
			</Panel>

			<Panel title="Etymology">
				The name comes from алма, the Kazakh word for &quot;apple&quot; and is
				often translated as &quot;full of apples&quot;. In fact, the region
				surrounding Almaty is thought to be the ancestral home of the apple, and
				the wild Malus sieversii is considered a likely candidate for the
				ancestor of the modern domestic apple.
			</Panel>
		</>
	);
}
