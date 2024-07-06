class Shape {
  name;
  sides;
  length;

  constructor(name,sides,length) {
    this.name = name;
    this.sides = sides;
    this.length = length;
  }

  calcPerimeter() {
    console.log(this.sides*this.length);
  }
}

class Sqaure extends Shape {
  length;

  constructor(name,sides,length) {
    super(name,sides);
    this.length = length;
  }

  calcArea() {
    console.log(this.length*this.length);
  }
}
let shape = new Shape('tri',5,5);
let sqr = new Sqaure('sqr',4,5);

sqr.calcArea();
sqr.calcPerimeter();
console.log(sqr);
console.log(shape);

shape.calcPerimeter();