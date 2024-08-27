//async function f() {
//	return 1;
//}
//f().then((data) => console.log(data));
function delayMessage(message, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(message);
		}, delay);
	});
}
async function f() {
	console.log("starting...");
	let dataReceived = await delayMessage("received data!", 3000);
	console.log(dataReceived);

	console.log("data is processing");
	let dataProcessed = await delayMessage("processing done!", 5000);
	console.log(dataProcessed);

	console.log("finishing");
	let result = await delayMessage("done!", 3000);
	console.log(result);
}
f();
