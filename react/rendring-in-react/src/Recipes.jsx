import { Fragment } from "react";
const recipes = [
	{
		id: "greek-salad",
		name: "Greek Salad",
		ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
	},
	{
		id: "hawaiian-pizza",
		name: "Hawaiian Pizza",
		ingredients: [
			"pizza crust",
			"pizza sauce",
			"mozzarella",
			"ham",
			"pineapple",
		],
	},
	{
		id: "hummus",
		name: "Hummus",
		ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
	},
];

/* export function Recipes() {
	return (
		<div>
			<h1>Recipes</h1>
			{recipes.map((recipe) => (
				<div key={recipe.id}>
					<h2>{recipe.name}</h2>
					<ul>
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient}>{ingredient}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
} */

function Recipe({ id, name, ingredients }) {
	return (
		<div>
			<h2>{name}</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
}
export function RecipeList() {
	return (
		<div>
			<h1>Recipes</h1>
			{recipes.map((recipe) => (
				<Recipe {...recipe} key={recipe.id} />
			))}
		</div>
	);
}
