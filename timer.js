
// File: timer.js

// Function to display a timer
function startTimer(seconds) {
    let time = seconds;
    const timer = setInterval(() => {
        console.log(time);
        time--;
        if (time < 0) {
            clearInterval(timer);
            console.log("Time's up!");
        }
    }, 1000);
}

// Start a timer for 10 seconds
startTimer(10);
