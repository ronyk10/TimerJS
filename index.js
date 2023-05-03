const start = document.getElementById("start").addEventListener("click", startTimer);
const stop = document.getElementById("stop").addEventListener("click", stopTimer);
const reset = document.getElementById("reset").addEventListener("click", resetTimer);



const timerDisplay = document.querySelector('.timer');
let intervalId;

function startTimer() {
    console.log('Start !');
    let time = 300; // 5 minutes en secondes
    displayTime(time); // Afficher le temps initial
    intervalId = setInterval(() => {
        time--;
        displayTime(time);
        if (time === 0) {
            clearInterval(intervalId);
            console.log('Temps écoulé !');
        }
    }, 1000);
}

function stopTimer() {
    console.log('Stop !');
    clearInterval(intervalId);
}

function resetTimer() {
    console.log('Reset !');
    clearInterval(intervalId);
    displayTime(300); // Réinitialiser le temps initial
}

function displayTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

