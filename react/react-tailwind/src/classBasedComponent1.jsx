import { Component, useState } from "react";

export function Todos({ name }) {
	const [todos, setTodos] = useState(["Just some demo tasks", "As an example"]);
	const [inputVal, setInputVal] = useState("");

	function handleChange(e) {
		setInputVal(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setTodos((todo) => [...todo, inputVal]);
		setInputVal("");
	}

	return (
		<>
			<h1>{name}</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="">
					Todo :{" "}
					<input
						type="text"
						name="enter-text"
						onChange={handleChange}
						value={inputVal}
						id=""
					/>
				</label>
				<button type="submit">Submit</button>
			</form>

			<h2>All the tasks!</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo}>{todo}</li>
				))}
			</ul>
		</>
	);
}

export class ClassInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: ["Just some demo tasks", "As an example"],
			inputVal: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState((state) => ({
			...state,
			inputVal: e.target.value,
		}));
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState((state) => ({
			todos: state.todos.concat(state.inputVal),
			inputVal: "",
		}));
	}
	render() {
		return (
			<section>
				<h3>{this.props.name}</h3>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task-entry">Enter a task: </label>
					<input
						type="text"
						name="task-entry"
						value={this.state.inputVal}
						onChange={this.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
				<h4>All the tasks!</h4>
				<ul>
					{this.state.todos.map((todo) => (
						<li key={todo}>{todo}</li>
					))}
				</ul>
			</section>
		);
	}
}
