// private properties cannot be accessed from out side the class ,they are only availbe to the class ,they can be static
// we can create them with property or method name prefixed with '#' like so #name

class Person {
  #name = 'shahid';
  #age = 21;

  getDetails(){
    return `Name: ${this.#name} Age: ${this.#age}`//availbe inside the class only
  }
}

let person = new Person();
console.log(person.getDetails());