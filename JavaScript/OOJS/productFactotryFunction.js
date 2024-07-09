function product(size, color, meterial) {
  let price = 0;

  let getDiscount = (discount) => {
    calculateProductPrice();
    let withDiscount = price - (price * discount / 100);
    return `Price with discount: ${withDiscount}`
  };


  let calculateProductPrice = () => {
    if ((size.toLowerCase() === 'small') && (color.toLowerCase() === 'red' || meterial.toLowerCase() === 'tar')) {
      price = 20;
    } else if ((size.toLowerCase() === 'maeduim') && (color.toLowerCase() === 'grey' || meterial.toLowerCase() === 'leder')) {
      price = 55;
    } else {
      price = 100;
    }
  };

  let getPrice = () => {
    calculateProductPrice();
    return `Price: ${price}`
  };

  let categorizeProduct = () => {
    calculateProductPrice();
    if (price < 20) return 'Cheap';
    else if (price >= 20 && price < 100) return 'Affordable';
    else return 'Expensive';
  };

  return {
    size,
    color,
    meterial,
    getPrice,
    getDiscount,
    categorizeProduct
  }
}


let product1 = product('large', 'red', 'tr');
console.log(product1.getPrice());
console.log(product1.getDiscount(10));
console.log(product1.categorizeProduct());