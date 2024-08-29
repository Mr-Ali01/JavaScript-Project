const currentTime = document.querySelector('#current-time');
const currentDate = document.querySelector('#date');
let intervalId;

function updateTime(format) {
    clearInterval(intervalId); // Clear any previous interval

    intervalId = setInterval(() => {
        const currentDateTime = new Date();
        currentDate.textContent = currentDateTime.toLocaleDateString();
        if (format === '12-hour') {
            currentTime.textContent = currentDateTime.toLocaleTimeString('en-US'); // 12-hour format
        } else {
            currentTime.textContent = currentDateTime.toLocaleTimeString('en-GB'); // 24-hour format
        }
    }, 1000);
}

// Initial call to start the clock in 24-hour format
updateTime('12-hour');

document.querySelector('.time-format').addEventListener('click', (e) => {
    if (e.target.id === 'clock-12') {
        updateTime('12-hour'); // Switch to 12-hour format
    } else if (e.target.id === 'clock-24') {
        updateTime('24-hour'); // Switch to 24-hour format
    }
}); 