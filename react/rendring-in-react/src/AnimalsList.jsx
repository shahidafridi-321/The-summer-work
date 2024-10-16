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

function ListItem(props) {
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
}
