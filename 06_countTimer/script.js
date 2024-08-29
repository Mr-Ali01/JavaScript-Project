const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
const displayHours = document.querySelector('#display-hours');
const displayMinutes = document.querySelector('#display-minutes');
const displaySeconds = document.querySelector('#display-seconds');
let timeRemaining;
let countdown;
document.querySelector('.control-timer').addEventListener('click', (e)=> {
    // console.log("Clicked listener");
    if(e.target.id === 'start-btn'){
        const hours = parseInt(hoursValue.value) || 0;
        const minutes = parseInt(minutesValue.value) || 0;
        const seconds = parseInt(secondsValue.value) || 0;
        timeRemaining = (hours * 3600) + (minutes * 60) + seconds;
        countdown = setInterval(updateTimer, 1000);
        document.querySelector('#timeup').textContent = '';
    }
    else if(e.target.id === 'reset-btn'){
        clearInterval(countdown);
        // console.log('click reset btn');
        hoursValue.value = '';
        minutesValue.value = '';
        secondsValue.value = '';
        displayHours.textContent = '00';
        displayMinutes.textContent = '00';
        displaySeconds.textContent = '00';
    }else if(e.target.id === 'pause-btn'){
        clearInterval(countdown);
    }
    
})
 
function updateTimer(){
    if(timeRemaining <= 0){
        clearInterval(countdown);
        document.querySelector('#timeup').textContent = 'Time is up!';
        return;
    }
    else if(timeRemaining > 0) {
        timeRemaining--;
        console.log(timeRemaining);
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        displayHours.textContent = String(hours).padStart(2, '0');
        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds).padStart(2, '0');
    }
}
