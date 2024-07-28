import  './index.css';
import img from './footer-bg.png'
const Profile = () => {
  return (
    <div className="container">
      <img src={img} width="40px" height="40px" alt="" />
      <h2>shahid</h2>
      <button>Follow</button>
    </div>

  )
};

const App = () => {
  return (
    <div>
    <Profile/>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quis recusandae cumque eveniet aspernatur ducimus dicta repellat facilis, tempora odio pariatur consequatur fugit, quos reprehenderit! Consequatur odit voluptates non suscipit!</p>
    </div>
  )
}

export default App