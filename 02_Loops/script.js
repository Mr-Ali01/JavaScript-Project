// <!-- first-project-Print-number-using-forloop-and-simple-function -->
// const printButton = document.querySelector('#click-print');
const resultValue = document.querySelector("#result");

function printNumber() {
  const inputPrintValue = document.querySelector("#print-value");
  let value = inputPrintValue.value;
  let stroed = [];
  if (value <= 15) {
    for (i = 0; i <= value; i++) {
      stroed.push(i);
    }
    //  console.log(stroed);
    resultValue.textContent = stroed;
  } else {
    resultValue.textContent = `Please enter a number between (0-15)`;
  }
  inputPrintValue.value = "";
}

// <!-- second-project-Print-Table-using-for-loop-and-expression-function -->
const tableReuslt = document.querySelector("#table-result");
const printTable = function () {
  const inputTableNumber = document.querySelector("#table-value");
  let tableNumber = inputTableNumber.value;
  let result = [];
  if (tableNumber <= 100) {
    for (i = 1; i <= 10; i++) {
      result.push(i * tableNumber);
      // console.log(result);
    }
    tableReuslt.textContent = result;
  } else {
    tableReuslt.textContent = `Please enter a number between (1-100)`;
  }
  inputTableNumber.value = "";
};

// <!-- Third-Project-add-number-using-while-loop-and arrow-function -->
const addValue = document.querySelector("#sum-value");
const resultSum = document.querySelector("#sum-result");
const addNumber = () => {
  let result = 0;
  if (0 <= addValue.value) {
    let i = 0;
    while (i <= addValue.value) {
      result += i;
      i++;
    }
    resultSum.textContent = `Sum is ${result}`;
  } else {
    resultSum.textContent = `Please enter a number`;
  }
  // console.log(result);
  addValue.value = "";
};

// <!-- Fourth-project-Print-factorial-using-do-while-Loop -->
const factNumber = document.querySelector("#fact-value");
const factResult = document.querySelector("#fact-result");

function printFactorial() {
        let factorial = factNumber.value;
        let result = 1;
        if(factorial <= 18) {
            let i = 1;
            do {
            result *= i;
            i++;
            } while (i <= factorial);
            factResult.textContent = `The factorial of ${factorial} is ${result}`
        } else if(18 < factorial){
            factResult.textContent = `Please enter the between (1-18)`;
        } else{
            factResult.textContent = `Please enter the number`;
        }
        factNumber.value = '';
//   console.log(result);
}

// <!-- Fifth-Project-Print-Pattern-using-for-loop-->
const starPattern = document.querySelector('#pattern-value');
const patternValue = document.querySelector('#pattern-result');
const checkPattern = document.querySelector('#check-pattern');
checkPattern.addEventListener('click', function(){
    // console.log("hiiii");
    let finalValue=``;
    let starNumber=parseInt(starPattern.value)
    if(1 <= starNumber && starNumber<=5){
      for(i=0; i<starNumber; i++){
        for(j=0; j<=i; j++){
            // console.log('*');
            finalValue+=`* `;
        }
        finalValue+=`\n`;
    }
    patternValue.textContent = finalValue;
    starPattern.value = '';
  } else {
    patternValue.textContent = `Please enter number between (1-5)`;
  }
})
      
// <!-- six-project-skip-number-usnig-continue-keyword -->
const inputNumber = document.querySelector('#input-value');
const skipValue = document.querySelector('#skip-value');
const checkNumber = document.querySelector('#check-skip');
const skipResult = document.querySelector('#skip-result');
        checkNumber.addEventListener('click', function(){
          let result='';
          let skip = parseInt(skipValue.value);
          let input = parseInt(inputNumber.value);
          for(i=1; i<=input; i++){
            if(i === skip){
            console.log(skip);
              continue;
            }
            result+=`${i}, `;
          }
          skipResult.innerHTML=result;
          // console.log(result);
          skipValue.value='';
          inputNumber.value='';

        })
    