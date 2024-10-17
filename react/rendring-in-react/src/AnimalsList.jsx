/* export function Animals() {
  return <div>
    <ul>
      <li>Lion</li>
      <li>Cat</li>
      <li>Cow</li>
      <li>Fish</li>
    </ul>
  </div>
}
 */

// Rendring List
/* export function Animals() {
	return (
		<div>
			<h1>Animals:</h1>
			<ul>
				{animals.map((animal) => {
					return <li key={animal}>{animal}</li>;
				})}
			</ul>
		</div>
	);
} */

// Rendring components
/* function ListItem(props) {
	return <li>{props.animal}</li>;
}

function List(props) {
	return (
		<ul>
			{props.animals.map((animal) => {
				return <ListItem key={animal} animal={animal} />;
			})}
		</ul>
	);
}

export function Animals() {
	let animals = ["Lion", "Duck", "Fish", "Dog", "Camel"];

  return <div>
    <h1>These are animals</h1>
    <List animals={animals}/>
  </div>
} */

// Conditional Rendring

/* function List(props) {
	return (
		<ul>
			{props.animals.map((animal) => {
				//return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null; // USING TERNARY OPERATORS
				return animal.startsWith("L") && <li key={animal}>{animal}</li>;
			})}
		</ul>
	);
}
 */

// Multiple conditions using if/else if and switch

function List(props) {
	if (!props.animals) return <div>Loading...</div>;
	if (props.animals.length === 0) {
		return <div>There is no element to render</div>;
	}
	return (
		<div>
			{props.animals.map((animal) => {
				return <li key={animal}>{animal}</li>;
			})}
		</div>
	);
}

export function Animals() {
	let animals = ["Lion", "Duck", "Fish", "Dog", "Camel", "Lizard"];
	let animals1 = [];
	return (
		<div>
			<h1>Animals starts with L:</h1>
			<List  />
		</div>
	);
}
