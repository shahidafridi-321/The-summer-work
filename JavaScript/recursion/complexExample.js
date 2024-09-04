let company = {
	sales: [
		{
			name: "John",
			salary: 1000,
		},
		{
			name: "Alice",
			salary: 1600,
		},
	],

	development: {
		sites: [
			{
				name: "Peter",
				salary: 2000,
			},
			{
				name: "Alex",
				salary: 1800,
			},
		],

		internals: [
			{
				name: "Jack",
				salary: 1300,
			},
		],
	},
};

function sumSalaries(department) {
	if (Array.isArray(department)) {
		return department.reduce((prev, current) => {
			return prev + current.salary;
		}, 0);
	} else {
		let sum = 0;
		for (let subdepartment of Object.values(department)) {
			sum += sumSalaries(subdepartment);
		}
		return sum;
	}
}

console.log(sumSalaries(company));
