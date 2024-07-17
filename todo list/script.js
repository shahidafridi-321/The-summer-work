let list = [{name:'khan',dueDate:'12/03/2000'}];
let addBtn = document.querySelector('.add-item');
addBtn.addEventListener('click', addItems);


function renderList(ar) {
  let container = document.querySelector('.js-todo-list');
  let HTML = '';
  ar.forEach(element => {
    HTML += `
    <p>${element.name} ${element.dueDate}</p>
    <button class='delete-btn'>Delete</button>
    <br>`;
  });
  console.log(HTML);
  container.innerHTML = HTML;
}

function addItems() {
  let inputData = document.querySelector('.js-input');
  let inputDate = document.querySelector('.js-select-date');
  if (inputData.value && inputDate.value) {
    list.push({ name: inputData.value, dueDate: inputDate.value });
    renderList(list);
    inputData.value = '';
    inputDate.value = '';
  }

}

renderList(list);