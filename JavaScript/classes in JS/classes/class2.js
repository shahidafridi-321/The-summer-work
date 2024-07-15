// we cannot create class instances or objects before classes initialization
// let user1 = new User('shahid',21); GIVE ERRORS
// class Expression
let User = class  {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
};
let user1 = new User('shahid',21);

// class declearation

class User1{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

    //WE CAN ALSO USE GETTER AND SETTER IN CLASSES AS WELL 
    get details() {
      return `Name is ${this.name} AND AGE IS ${this.age}`;
    }
    set setname(name){
      this.name = name;
    }

  getName(){
    return this.name;
  }


}
/*
let user2 = new User1('ali',19);
user2.setname = 'shahid khan';
delete User1.latest;
console.log(user2.getName());
console.log(user2.details);
console.log(user2);


// we can append getter or setter  any time later on when needed

Object.defineProperty(user2,'gettingAge',{
  get(){
    return this.age;
  },
});

// console.log(user2.gettingAge); */

let obj = {
  name:'shahid',
  age:21,
  set setName(name){
    this.name = name;
  },
}
obj.setName = 'kul kula khan';
console.log(obj);
