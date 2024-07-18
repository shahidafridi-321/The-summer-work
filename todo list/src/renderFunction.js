import { list } from './index';
function renderList(ar) {
  let container = document.querySelector('.js-todo-list');
  let HTML = '';
  ar.forEach((element,index) => {
    HTML += `
    <p>${element.name} ${element.dueDate}</p>
    <button class='delete-btn'>Delete</button>
    <br>`;
  });
  container.innerHTML = HTML;
  
}

export { renderList };