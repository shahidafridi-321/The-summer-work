function Employe(name,age,salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}

Employe.prototype.getDetails = function() {
  return `Employe name is ${this.name}, He is ${this.age} years young,Salary of employe ${this.salary}`;
};

function Manager(name,age,salary,department) {
  Employe.call(this,name,age,salary);
  this.department = department;
}

// Object.setPrototypeOf(Manager.prototype,Employe.prototype);

Manager.prototype = Object.create(Employe.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function (){
  return `The Manager is from the Department of ${this.department}`;
};

Manager.prototype.scheduleTime = function(time){
  return `The meeting time is ${time}`;
}

function Developer(name,age,salary,programmingLanguage) {
  Employe.call(this,name,age,salary);
  this.programmingLanguage = programmingLanguage;
}

// Object.setPrototypeOf(Developer.prototype,Employe.prototype);

Developer.prototype = Object.create(Employe.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getProgLang = function(){
  return `The developer use the ${this.programmingLanguage} Programming language`;
};

Developer.prototype.writeCode = function(){
  return 'Writing code is fun and i am very proud to be a programmer and develpoer,,, it is a fun you know...'
};
const manager = new Manager('Alice', 40, 90000, 'HR');
console.log(manager.getDetails()); 
console.log(manager.getDepartment()); 
 

const developer = new Developer('Bob', 30, 80000, 'JavaScript');
console.log(developer.getDetails()); 
console.log(developer.getProgLang());
console.log(developer.writeCode());

