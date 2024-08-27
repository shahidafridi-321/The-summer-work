const server = {
	people: [
		{
			name: "Odin",
			age: 20,
		},
		{
			name: "Thor",
			age: 35,
		},
		{
			name: "Freyja",
			age: 29,
		},
	],
	getPeople() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(this.people);
			}, 2000);
		});
	},
};

//function getPersonalInfo(name) {
//	return server.getPeople().then((people) => {
//		return people.find((person) => {
//			return person.name === name;
//		});
//	});
//}

async function getPersonalInfo(name) {
	let people = await server.getPeople();
	let person = people.find((person) => person.name === name);
	return person;
}

//getPersonalInfo("Odin").then((person) => {
//	console.log(person);
//});

async function getPersonalLog(name) {
	let person = await getPersonalInfo(name);
	console.log(person);
}
getPersonalLog("Freyja");
