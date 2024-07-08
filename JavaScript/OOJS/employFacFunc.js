function createEmployee(name, age, salary) {
  return {
    name,
    age,
    salary,
    getDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}$`);
    }
  };
}

function createManager(name, age, salary, department) {
  const employee = createEmployee(name, age, salary);
  return {
    ...employee,
    department,
    getDepartment() {
      return `Manager is from the department of ${this.department}`;
    },
    scheduleMeeting(time) {
      console.log(`The manager is set to meet at ${time}`);
    }
  };
}

function createDeveloper(name, age, salary, progLanguage) {
  const employee = createEmployee(name, age, salary);
  return {
    ...employee,
    progLanguage,
    getProgLanguage() {
      return `The developer loves to program in ${this.progLanguage}`;
    },
    writeCode() {
      console.log('It is fun to write code and I love doing it');
    }
  };
}

// Testing the implementation
let developer1 = createDeveloper('Shahid', 23, 2000, 'JavaScript');
console.log(developer1.getProgLanguage());
developer1.getDetails();

let manager1 = createManager('Alice', 40, 90000, 'HR');
console.log(manager1.getDepartment());
manager1.getDetails(); 
manager1.scheduleMeeting('10 AM');
