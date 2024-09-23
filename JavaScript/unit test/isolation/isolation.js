function guesingGame() {
	let magicNumber = 22;
	let guessNumber = prompt("enter a number ");
	if (guessNumber > magicNumber) console.log("To Greater");
	else if (guessNumber < magicNumber) console.log("To low");
	else console.log("congrates you win");
}

function guesingGameIsolation(magicNumber, guessNumber) {
	if (guessNumber > magicNumber) console.log("To Greater");
	else if (guessNumber < magicNumber) console.log("To low");
	else console.log("congrates you win");
}

function runTheGame() {
	let magicNumber = 22;
	let guessNumber = prompt("enter a number ");
	guesingGameIsolation(magicNumber, guessNumber);
}

runTheGame();
