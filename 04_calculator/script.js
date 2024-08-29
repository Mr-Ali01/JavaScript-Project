const displayResult = document.querySelector(".display-result");
const inputValue = document.querySelector("#input-value");
document
  .querySelector(".calculator-operations")
  .addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("btn")) {
      const buttonId = target.id;
// Handle the number
      if (!isNaN(buttonId) || buttonId === ".") {
        inputValue.value += buttonId;
      } 
// Handle the Arithmetic operator
      else if (target.classList.contains("operator")) {
        const buttId = target.id;
        inputValue.value += " " + buttId +" ";
      }
// Handle the sum of user input
      else if(target.id === "=") {
        console.log("click equal");
        try{
        let value = eval(inputValue.value);
        displayResult.textContent = value;
        inputValue.value = "";
        console.log("value is: ", value);
        } catch(error) {
            console.log('error1');
            
            displayResult.textContent = 'Error';
        }
      } 
// Handle the delete all value
      else if (target.id === "clear") {
        displayResult.textContent = "";
        inputValue.value = "";
      }
// Handle the each value of the user input
      else if (target.id === "delete") {
        inputValue.value = inputValue.value.slice(0, -1);
      }else{
        console.log('Ungandled button click:', buttonId);
        
      }
    }
  });
