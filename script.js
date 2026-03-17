// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 10;
let isCountdownRunning = false;
let hasShownConfetti = false;

// Function to start the countdown
function startCountdown() {
    // Prevent starting multiple countdowns at the same time
    if (isCountdownRunning) {
        return;
    }

    // Reset values each time the countdown starts
    timerValue = 10;
    counterValue = 0;
    hasShownConfetti = false;
    isCountdownRunning = true;

    timerDisplay.textContent = timerValue;
    counterDisplay.textContent = counterValue;

    const countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '0'; // Ensure the display shows 0
            isCountdownRunning = false;
        }
    }, 1000);
}

// Initialize the counter value
let counterValue = 0;

// Function to increase the counter
function increaseCounter() {
    // Only allow increasing the counter while the countdown is running
    if (!isCountdownRunning) {
        return;
    }

    // Increment the counter value
    counterValue++;
    // Update the counter display
    counterDisplay.textContent = counterValue;

    // Show confetti if the counter reaches 10 or greater within the 10-second countdown
    if (counterValue >= 10 && !hasShownConfetti && timerValue > 0) {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
        hasShownConfetti = true;
    }
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
