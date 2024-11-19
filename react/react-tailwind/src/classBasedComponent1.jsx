import { Component } from "react";

export class ClassInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: ["Just some demo tasks", "As an example"],
			inputVal: "",
			editIndex: null,
			editValue: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEditToggle = this.handleEditToggle.bind(this);
		this.handleEditChange = this.handleEditChange.bind(this);
		this.handleResubmit = this.handleResubmit.bind(this);
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

	handleDelete(deleteTodo) {
		this.setState((state) => ({
			todos: state.todos.filter((todo) => todo !== deleteTodo),
		}));
	}

	handleEditToggle(index) {
		this.setState((state) => ({
			editIndex: index,
			editValue: state.todos[index],
		}));
	}

	handleEditChange(e) {
		this.setState({ editValue: e.target.value });
	}

	handleResubmit(index) {
		this.setState((state) => {
			const updatedTodos = [...state.todos];
			updatedTodos[index] = state.editValue;

			return {
				todos: updatedTodos,
				editIndex: null,
				editValue: "",
			};
		});
	}

	render() {
		return (
			<section>
				<h3>{this.props.name}</h3>
				<Count length={this.state.todos.length} />
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="task-entry">Enter a task: </label>
					<input
						className="border border-black"
						type="text"
						name="task-entry"
						value={this.state.inputVal}
						onChange={this.handleChange}
					/>
					<button type="submit" className="px-4 py-2 border border-black">
						Submit
					</button>
				</form>
				<h4>All the tasks!</h4>
				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>
							{this.state.editIndex === index ? (
								<input
									type="text"
									value={this.state.editValue}
									onChange={this.handleEditChange}
									className="border border-black"
								/>
							) : (
								todo
							)}

							{this.state.editIndex === index ? (
								<button
									className="px-4 py-2 border border-black"
									onClick={() => this.handleResubmit(index)}
								>
									Resubmit
								</button>
							) : (
								<button
									className="px-4 py-2 border border-black"
									onClick={() => this.handleEditToggle(index)}
								>
									Edit
								</button>
							)}

							<button
								className="px-4 py-2 border border-black"
								onClick={() => this.handleDelete(todo)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>{" "}
			</section>
		);
	}
}

class Count extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <h2>{this.props.length}</h2>;
	}
}
