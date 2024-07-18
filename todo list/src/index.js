import { renderList }from './renderFunction';
import {addItems} from './functionAddItems';


let list = [{name:'khan',dueDate:'12/03/2000'}];
let addBtn = document.querySelector('.add-item');
addBtn.addEventListener('click', addItems);


renderList(list);
export {list};
