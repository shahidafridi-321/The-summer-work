import React from "react";

let Item = ({name,importance}) => {
return <li key={name}>
  {name}
  {importance > 0 && ' '}
  {importance > 0 && <i>{`(importance: ${importance})`}</i> }
</li>
}
export const Challenge2 = () => {
	return (
		<div>
			<section>
				<h1>Sally Ride&apos;s Packing List</h1>
				<ul>
					<Item importance={9} name="Space suit" />
					<Item importance={0} name="Helmet with a golden leaf" />
					<Item importance={6} name="Photo of Tam" />
				</ul>
			</section>
		</div>
	);
};
