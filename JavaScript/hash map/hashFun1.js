/* 

-Hashing is the creating a function that takes an input(name) and return output(hash code).
-Returns the same output for the same input, it does not generate output randomly.
-It is a one-way-process means the generated output cannot be converted back to the input
-use for security,if lost data they will not get the original data instead they get hash codes



function hash(name) {
	return name.charAt(0);
}
function hash(name,surname) {
	return name.charAt(0)+surname.charAt(0);
}
console.log(hash("shahid"));// output s
console.log(hash("shahid","afridi"));// output sa
*/

function stringToNumber(string) {
	let hashCode = 0;
	for (let i = 0; i < string.length; i++) {
		hashCode += string.charCodeAt(i);
	}
	return hashCode;
}

function hash(name, surName) {
	return stringToNumber(name) + stringToNumber(surName);
}

console.log(hash("shahid", "afridi"));
