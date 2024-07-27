let name = 'koko';
let birthYear = 2003;
let presentYear = new Date().getFullYear();
const Hello = (prop) => {
  return(
    <div>
      <p>Hello {prop.name} You are {prop.age} Years Old</p>
    </div>
  );
}
const App = () => {
  let users = [
    {
      name:'shaid',
      age:20,
    },
    {
      name:'khan',
      age:33,
    }
  ];
  let friends = ['lolo','kokomomo'];
  return (

    /*
    <div>
      <p>Greeting</p>
      <Hello name="shahid" age="23"/>
      <Hello name="`Afridi" age="21"/>
      <Hello name={name} age = {presentYear - birthYear}/>
    </div> */

    <div>
      <div>
      <p>{users[0].name } {users[0].age}</p>
      <p>{users[1].name} {users[1].age}</p>
      </div>
      <div>
        <p>{friends}</p>
      </div>
    </div>
   
  )
};

export default App
