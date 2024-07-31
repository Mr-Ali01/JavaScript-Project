// script.js
// Positive and Negative Number script
const inputValue = document.querySelector('.ip-box');
const checkButton = document.querySelector('.check-number');
const resultValue = document.getElementById('result');

        checkButton.addEventListener('click', function(){
          
            let isValue = parseInt(inputValue.value)
            // console.log(value);
            if(isValue >= 0){
                resultValue.innerHTML = `${isValue} is a Positive number`
            } else if(isValue <= 0) {
                resultValue.innerHTML = `${isValue} is a Negative number`
            } else{
                resultValue.innerHTML = `${inputValue.value} is Not a number`
            }
            inputValue.value = ''
        })

//2 Vote Eligible or not
const voteAge = document.querySelector('#ip-age');
const ageButton = document.querySelector('#check-age');
const resultAge = document.querySelector('#result-age');
        ageButton.addEventListener('click', function(){
            let age = parseInt(voteAge.value)
            if(age >= 18){
                resultAge.innerHTML = `You can vote`;
            } else if(age < 18){
                resultAge.innerHTML =`You can't vote`;
            } else {
                resultAge.innerHTML =`Please enter a number;`
            }
            voteAge.value = '';
        })

 //3 Find the name of the Day of the Week
 const dayName= document.querySelector('#day-name');
 const checkDay = document.getElementById('check-day');
 const resultDay = document.getElementById('result-day');
        checkDay.addEventListener('click', function(){
            let name = parseInt(dayName.value);
            // console.log(name);
            switch(name){
                case 1:
                    resultDay.innerText = `Sunday`
                    break;
                case 2:
                    resultDay.innerText = `Monday`
                    break;
                case 3:
                    resultDay.innerText = `Tuesday`
                    break;
                case 4:
                    resultDay.innerText = `Wednesday`
                    break;
                case 5:
                    resultDay.innerText = `Thursday`
                    break;
                case 6:
                    resultDay.innerText = `Friday`
                    break;
                case 7:
                    resultDay.innerText = `Saturday`
                    break;
                default:
                    resultDay.innerText= `Invalid day number. Please enter a number between 1 and 7.`
                    break;
            }
            dayName.value = '';
        })

// 4 Calculate cgpa
const cgpaValues = document.querySelector('#cgpa-values');
const checkCgpa = document.querySelector('#check-cgpa');
const cgpaResult = document.querySelector('#cgpa-result');
        checkCgpa.addEventListener('click', function(){
            console.log('hii');
            let arrayInput = cgpaValues.value.split(',').map(Number);
            // let cgpaMarks = arrayInput.map(Number)
            let result = arrayInput.reduce(function(acc, num) {
                return acc + num;
            }, 0);
            cgpaResult.innerHTML =`Your cgpa is: ${(result/26).toFixed(2)}`
            cgpaValues.value = '';
        })

// 5 Leap Year
const inputYear = document.querySelector('.leap-year');
const checkYear = document.querySelector('#check-year');
const leapYear = document.querySelector('#year-result');
        checkYear.addEventListener('click', function(){
            let leapYearValue = parseInt(inputYear.value);
            if(leapYearValue % 400 === 0){
                leapYear.textContent =`${leapYearValue} is a leap year`;
            } else if(leapYearValue % 4 === 0){
                leapYear.textContent =`${leapYearValue} is a leap year`;
            }
            // else if(leapYearValue % 100 === 0){
            //     leapYear.textContent =`${leapYearValue} is not a leap year`;
            // }
             else{
                leapYear.textContent =`${leapYearValue} is not a leap year`;
            }
            inputYear.value=''
        })
//6  check keywords
const keyValue = document.querySelector('.key-char');
const charCode = document.querySelector('#char-code');
const keyResult = document.querySelector('#char-result');
    keyValue.addEventListener('keydown', function(e){
        let code = (e.key === ' ' ? 'Space': e.key);
        keyResult.innerText = `Your entered keyword is: ${code}`;
        charCode.innerText = `ASCII Code is: ${e.keyCode}`;
        keyValue.value = '';
    })