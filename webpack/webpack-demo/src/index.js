import _ from 'lodash'
// import {myName} from './myName'; For NAmed exports
import myName from './myName'; // For defaul exports
import { funcOne, funcTwo} from './namedExports';
function component(){
  const element = document.createElement('div');

  element.textContent = myName('ShaHid') + ' ' + funcOne() + ' ' + funcTwo();

  return element
}

document.body.appendChild(component());