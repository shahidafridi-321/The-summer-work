import './module1.css';

function title(){
  let title = document.createElement('h1');
  title.textContent = 'I am no thing';
  document.body.appendChild(title);
}

export { title };