//1.  Array method script
const arrayOperation = document.querySelector("#array-operations");
const arrValues = document.querySelector("#array-value");
const randomButton = document.querySelector("#generate-random-values");
const finalResult = document.querySelector("#array-operation-result");
const pushValue = document.querySelector("#push-value");
const unshiftValue = document.querySelector("#unshift-value");
const arrMethodDesc = document.querySelector("#arr-method-desc");

//1.  Generate-Random-Number
let randomValues = [1, 2, 3, 4, 5];
arrValues.textContent = randomValues;
randomButton.addEventListener("click", () => {
  randomValues = [];
  let generateNumber;
  for (let i = 0; i < 5; i++) {
    generateNumber = Math.floor(Math.random() * 99);
    randomValues.push(generateNumber);
  }
  arrValues.textContent = randomValues;
});

//2. Pop() operation
const popButtuon = document.querySelector("#pop");
popButtuon.addEventListener("click", () => {
  if (randomValues.length > 0) {
    let popVal = randomValues.pop();
    arrValues.textContent = randomValues;
    finalResult.textContent = `Remove the last element is ${popVal} of the array`;
    arrMethodDesc.textContent = `The 'pop()' method removes the last element from an array and returns that element. This method reduces the length of the array by one.`;
  } else {
    finalResult.textContent = `Array is empty, Please generate the new array values`;
  }
});

//3. push() operation
const pushButton = document.querySelector("#push-button");
pushButton.addEventListener("click", () => {
  let num = parseInt(pushValue.value);
  if (num >= 0) {
    randomValues.push(num);
    arrValues.textContent = randomValues;
    finalResult.textContent = `Add the element is ${num} in the last index of the array`;
    arrMethodDesc.textContent = `The push() method adds one or more elements to the end of an array. The length of the array increases based on the number of elements added.`;
    pushValue.value = "";
  } else {
    finalResult.textContent = `Please enter a number then push;`;
  }
});

//4. unshift operation
const unshiftButton = document.querySelector("#unshift-button");
unshiftButton.addEventListener("click", () => {
  let number = parseInt(unshiftValue.value);
  if (number >= 0) {
    randomValues.unshift(number);
    arrValues.textContent = randomValues;
    unshiftValue.value = "";
    finalResult.textContent = `Add the element is ${number} in the first index of the array`;
    arrMethodDesc.textContent = `The unshift() method adds one or more elements to the beginning of an array. The length of the array increases based on the number of elements added, and the existing elements are shifted to the right.`;
  } else {
    finalResult.textContent = `Please enter a number then unshift`;
  }
});

//5.  shift operation
const shiftButtuon = document.querySelector("#shift");
shiftButtuon.addEventListener("click", () => {
  if (randomValues.length > 0) {
    let shiftVal = randomValues.shift();
    arrValues.textContent = randomValues;
    finalResult.textContent = `Remove the first element is ${shiftVal} of the array`;
    arrMethodDesc.textContent = `The shift() method removes the first element from an array and returns that element. This method reduces the length of the array by one, and the remaining elements are shifted to the left.`;
  } else {
    finalResult.textContent = `Array is empty, Please generate the new array values`;
  }
});
