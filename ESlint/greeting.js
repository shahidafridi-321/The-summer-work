let person = {
  firstName: "shahid",
  lastName: "ali",
};
function user(para) {
  return "fullName" + para.firstName + para.lastName;
}
console.log(user(person));
