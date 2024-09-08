const colorOptions = document.querySelectorAll('.color-option');
const targetColorElement = document.getElementById('targetColor');
const scoreElement = document.getElementById('score');
const timeLeftElement = document.getElementById('timeLeft');

let score = 0;
let timeLeft = 30;
let targetColor;
let interval;

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setTargetColor() {
    targetColor = generateRandomColor();
    targetColorElement.textContent = targetColor;
}

function setColorOptions() {
    const correctIndex = Math.floor(Math.random() * colorOptions.length);
    colorOptions.forEach((option, index) => {
        if (index === correctIndex) {
            option.style.backgroundColor = targetColor;
        } else {
            option.style.backgroundColor = generateRandomColor();
        }
    });
}

function startGame() {
    setTargetColor();
    setColorOptions();
    interval = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            alert(`Time's up! Your score is ${score}`);
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = score;
    timeLeftElement.textContent = timeLeft;
    setTargetColor();
    setColorOptions();
    startGame();
}

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (option.style.backgroundColor === targetColor) {
            score++;
            scoreElement.textContent = score;
            setTargetColor();
            setColorOptions();
        }
    });
});

startGame();
