/*when a function is called , the information of the execution of the running function is stored in a
EXECUTION CONTEXT...its an internal data structure that stores the information of executing function,that where is the control flow ,current variable and many other info...one function has exactly one execution context.

when a function makes a nested call

1) pause the current function
2) the execution context of the current function is remembered in a special data structure called 
EXECUTION CONTEXT STACK
3) nested call executes
4) after it ends , the old execution context is retrieved from the exexution context stack and the function execution is resumed
*/

function pow(x, n) {
	if (n == 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

console.log(pow(2, 3));
