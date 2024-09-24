// UK tax is 20 percent so we use it
function calculateTaxAfterProduct(productPrice) {
	return (
		productPrice * 0.2 + productPrice
	); /* so this function passes both rules , no use of external
  things and it returns always the same result for same input   */
}

// impure function

let tax = 20;

function calculateTax(productPrice) {
	return (productPrice * 100) / tax + productPrice; // it uses external variable so it is not pure function
}
