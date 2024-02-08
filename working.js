const startstopbtn = document.querySelector(".startstop");
const resetbtn = document.querySelector(".reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

let timerinterval = null;
let timerstatus = "stopped";

function stopwatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    leadingseconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    leadingminutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    leadinghours = hours < 10 ? "0" + hours.toString() : hours;

    document.querySelector('.timer').innerText = leadinghours + ":" + leadingminutes + ":" + leadingseconds;
}

startstopbtn.addEventListener('click', function() {
    if (timerstatus === "stopped") {
        timerinterval = window.setInterval(stopwatch, 1000);
        document.querySelector('.startstop').innerHTML = '<span class="material-symbols-outlined">pause_circle</span>';
        timerstatus = 'started';
    } else {
        window.clearInterval(timerinterval);
        document.querySelector('.startstop').innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
        timerstatus = 'stopped';
    }
});

resetbtn.addEventListener('click', function(){
    window.clearInterval(timerinterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('.timer').innerText = "00:00:00";
    timerstatus = 'stopped';
    startstopbtn.textContent = 'Start';
});

