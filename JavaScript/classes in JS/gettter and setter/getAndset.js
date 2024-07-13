let user = {
  name: 'shahid',
  surName: 'Afridi',

  get fullName() {
    return `${this.name} ${this.surName}`;
  },
  set fullName(value) {
    [this.name, this.surName] = value.split(' ');
  },
  set surrName(value) {
    this.surName = value;
  }
}
// user.fullName = 'khan ali';
// user.surrName = 'jan';
// console.log(user.fullName);
// console.log(user.surName);
let user1 = {
  name: 'shahid',
  surName: 'khan',
};
Object.defineProperty(user1, 'fullName', {
  get() {
    return `${this.name} ${this.surName}`;
  },
  set(value) {
    [this.name, this.surName] = value.split(' ');
  }
});
// user1.fullName = 'khan jan';
// console.log(user1.fullName);

// for(let key in user1){
//   console.log(key);
// }


// SMART GETTER AND SETTER
let user2 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log('the name most be atleast 4 characters..');
      return;
    } else {
      this._name = value;
    }


  }
};


// console.log(user2.name = 'kh');

function User(name,birthDay){
  this.name = name;
  this.birthDay = birthDay;
  Object.defineProperty(this,'age',{
    get(){
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthDay.getFullYear();
    }
  });
}



let user3 = new User('shahid',new Date(2003, 3, 20));
console.log(user3);
console.log(user3.birthDay);
console.log(user3.name);
console.log(user3.age);