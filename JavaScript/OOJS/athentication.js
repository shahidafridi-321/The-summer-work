let data = [
  {
    name: 'shahid',
    password: '124'
  },
  {
    name: 'ali',
    password: '123'
  },
  {
    name: 'khan',
    password: '345'
  },
];
console.log(data);

function authentication(name, password, data) {
  const userData = data;
  let attempts = 0;

  const loginAttempt = () => {
    return attempts++;
  };

  const logIn = () => {
    const userID = userData.find(user => user.name.toLowerCase() === name.toLowerCase() && user.password === password);
    if (attempts < 3) {
      if (!userID) {
        console.log('Wrong password or username');
        loginAttempt();
      } else {
        console.log('You have successfully logged in');
      }
    } else {
      console.log('Too many attempts, please try again later.');
    }
  };

  const logOut = () => {
    const confirm = prompt('Are you sure ? want to log out...Enter yes/no');
    if ( confirm.toLowerCase() === 'yes'){
      console.log('Succefully Loged out');
    } else {
      console.log('Stayed loged in');
    }
  };


  const changePassword = () => {
    const userName = prompt('Enter user Name: ');
    const previousPassword = prompt('Previous Password: ');
    const userID = userData.find(user => user.name.toLowerCase() === userName.toLowerCase() && user.password === previousPassword);
    if (!userID) {
      console.log('Incorrect username or password');
    } else {
      const newPassword = prompt('Enter New Password: ');
      userID.password = newPassword;
      console.log('Password successfully changed');
    }
  };

  return {
    logIn,
    logOut,
    changePassword,
  };
}

let user1 = authentication('khan', '35', data);
user1.logIn(); 
user1.logIn(); 
user1.logIn(); 
user1.logIn(); 

// user1.changePassword();
console.log(data);
user1.logOut();
