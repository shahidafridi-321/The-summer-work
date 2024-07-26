function User(name,age){
this.name = name;
this.age = age;
}

User.prototype.getInfo = function(){
  console.log(`Name: ${this.name} Age: ${this.age}`);
 }
let u1 = new User('shahid',24);
let u2 = new User('afridi',20);
// console.log(u1.name);
// u1.getInfo();
// u2.getInfo();


function User1(name,age){
  return {name,age}
}

let u3 = User1('kaka',30);
User1.getinfo = function(){
  console.log('name');
}
// console.log(Object.getPrototypeOf(User1().getinfo()));


function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

function createStudent(name, age, grade) {
  const person = createPerson(name, age);

  let study = function(){
    console.log(`${this.name} is studying.`);
  }
  return Object.assign({},person,{grade},{study});
}

const student1 = createStudent('Alice', 20, 'A');
console.log(student1);
student1.greet(); // Output: Hello, my name is Alice and I am 20 years old.
student1.study(); // Output: Alice is studying.
