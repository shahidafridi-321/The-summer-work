// this static members,feilds or metheds cannot be access via classs instance/obj 
// they can be accessed via the CLASS directly...

class Person {
  static name = 'shahid khan afridi';
  static age = 24;

  static details(){
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

let person = new Person();

console.log(Person.name); // shahid khan afridi
console.log(person.name); // undefined

console.log(Person.details());

// we can call static properties or methods from another static method of the same class with this keyword

// but we cannot directly accesses the static methods or propertries from non static method using this keyword,
// instead we use the class name to accesses them....