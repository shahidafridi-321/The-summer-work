let dataArray = [];

for(let i = 0; i < 3; i++){
  let elementArray = [];
  for(let j = 0;j < 3;j++){
    elementArray.push(j+1);
  }
  dataArray.push(elementArray);
}
console.log(dataArray);