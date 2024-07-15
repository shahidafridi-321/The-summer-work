// used to extend one class from another class to create class that is child of another class 
class DateFormatter extends Date{
  getFormattedDate(){
    const months = [
      'Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

// console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());

function User(){
  this.name = 'shahid';
  this.age = 21;

}
User.prototype.getDetails = function(){
  return `${this.name} ${this.age}`;
}

class Admin extends User{
  password = 'something';
}

let a1 = new Admin();
console.log(a1.getDetails());