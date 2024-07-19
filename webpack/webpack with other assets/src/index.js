import _ from 'lodash';
import './style.css';
import { title } from './module1';
import { tl } from './module2';
import image from './paper.jpg';
import Data from './data.xml';
import Notes from './data.csv';

console.log(Data);

console.log(Notes);

import toml from './data.toml';

import yaml from './data.yaml';

import json from './data.json5';


console.log(toml.title); // output `TOML Example`

console.log(toml.owner.name); // output `Tom Preston-Werner`


console.log(yaml.title); // output `YAML Example`

console.log(yaml.owner.name); // output `Tom Preston-Werner`


console.log(json.title); // output `JSON5 Example`

console.log(json.owner.name); // output `Tom Preston-Werner`

function component(){
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack!'],' ');
  element.classList.add('hello');
  const myImage = new Image();
  myImage.src = image ;
  element.appendChild(myImage);

  return element;
}
document.body.appendChild(component());
title();
tl();

