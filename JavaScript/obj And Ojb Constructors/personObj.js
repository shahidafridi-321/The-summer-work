function Person(name){
  this.name= name;
}

Person.prototype.sayName = function(){
  console.log(`Hello, i am  ${this.name}`);
};

function Player(name){
  this.name = name;
}
Player.prototype.sayMarker = function(){
  console.log(`My marker is ${this.marker}`);
};

console.log(Object.getPrototypeOf(Player.prototype));
Object.setPrototypeOf(Player.prototype,Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype));

let player1 = new Player('shahid','x');
let player2 = new Player('khan','y');

Player.prototype.sayHello = function(){
  console.log('hello their');
};

let person1 = new Person('mama');

player1.sayName();
player1.sayMarker();
console.log(player1.name);
person1.sayName();
console.log(Object.getPrototypeOf(player1));
player1.sayHello();


