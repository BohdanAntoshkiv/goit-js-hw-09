const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', stopChangeBgColor);

function changeBgColor() {
    timerId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopChangeBgColor() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

startBtn.style.marginBottom = "20px"
startBtn.style.padding = '20px';
startBtn.style.border = '3px';
startBtn.style.borderRadius = '15px';
startBtn.style.backgroundColor = '#35d59c';
startBtn.style.color = '#413e45';

stopBtn.style.marginBottom = '20px';
stopBtn.style.padding = '20px';
stopBtn.style.border = '3px';
stopBtn.style.borderRadius = '15px';
stopBtn.style.backgroundColor = '#ff4207';
stopBtn.style.color = '#413e45';