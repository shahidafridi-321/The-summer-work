import _ from 'lodash';


 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['shahid','afridi'], ' ');

   return element;
 }
 function createHt(){
  const h1 = document.createElement('h1');
  h1.textContent = _.join(['shshhshshsh'],' ');

  return h1
 }

 document.body.appendChild(component());
 document.body.appendChild(createHt());