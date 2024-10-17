import React from "react";

function List({ name, isPicked }) {
	/* if (isPicked) return <li key={name}>{name} ✅</li>;
  return null
	// return <li key={name}>{name}</li>; */

	return <li>{isPicked ? <del> {name + " ✅"} </del> : name}</li>;
}

function ListLogicalAnd({ name, isPicked }) {
	// for more simplicity we can do this

	let itemContent = name;
	if (isPicked) {
		itemContent = <del>{name + " ✅"}</del>;
	}
	return (
		<li key={itemContent}>{itemContent}</li>

		// And operator
		//{/* <li key={name}>
		//{name} {isPicked && " ✅"}
		//</li> */}
	);
}

export const ItemsList = () => {
	return (
		<section>
			<h1>Sally Ride&apos;s Packing List</h1>
			<ul>
				<ListLogicalAnd isPicked={true} name={"Space Suit"} />
				<ListLogicalAnd isPicked={true} name={"Helmet with a golden leaf"} />
				<ListLogicalAnd isPicked={false} name={"Photo of tam"} />
			</ul>
		</section>
	);
};
