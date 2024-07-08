function makeAdding(firstNumber) {
  const first = firstNumber;

  function result(lastnumber) {
    const second = lastnumber;
    return first + second;
  }
  return result(5);
}

let ans = makeAdding(5);
console.log(ans);