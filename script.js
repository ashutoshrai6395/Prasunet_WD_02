let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

function updateDisplay() {
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    millisecondsElement.textContent = milliseconds.toString().padStart(2, '0');
}

function startStopwatch() {
    timer = setInterval(() => {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        updateDisplay();
    }, 10);
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    stopStopwatch();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = '';
}

function lapStopwatch() {
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    const lapElement = document.createElement('li');
    lapElement.textContent = lapTime;
    lapsList.appendChild(lapElement);
}

startStopBtn.addEventListener('click', () => {
    if (running) {
        stopStopwatch();
        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = '#28a745';
    } else {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
        startStopBtn.style.backgroundColor = '#ffc107';
    }
    running = !running;
});

resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', lapStopwatch);

updateDisplay();
