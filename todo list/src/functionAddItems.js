import { renderList } from './renderFunction';
import { list } from './index';



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

export { addItems };