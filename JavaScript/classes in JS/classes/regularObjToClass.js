let Person = {
  name:'shahid',
  age:19,
  getDetails(){
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

class Teacher {
  id = 124;
}

Object.setPrototypeOf(Teacher.prototype,Person);

let t1 = new Teacher();
console.log(t1.getDetails());