const sortingPeopleInALine = function (inputArray) {
  let pplArray = [];
  for (const key in inputArray) {
    if (inputArray[key] !== -1) {
      console.log(inputArray[key]);
      pplArray.push(inputArray[key]);
    }
  }
  pplArray.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  console.log(pplArray);
  for (const key in inputArray) {
    if (inputArray[key] === -1) {
       pplArray.splice(key,0,-1)
    }
  }
  console.log(pplArray);

};

sortingPeopleInALine([-1, 150, 190, 170, -1, -1, 160, 180]);
