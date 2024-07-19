import './module2.css';
function title(){
  let title = document.createElement('h1');
  title.textContent = 'black text';
  document.body.appendChild(title);
}

export { title as tl};