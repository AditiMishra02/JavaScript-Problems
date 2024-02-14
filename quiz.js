// File: quiz.js

const readline = require('readline');

// Define quiz questions and answers
const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare" }
];

// Function to start the quiz
function startQuiz() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let score = 0;
    let currentIndex = 0;

    const askQuestion = () => {
        if (currentIndex < questions.length) {
            const question = questions[currentIndex];
            rl.question(`Question ${currentIndex + 1}: ${question.question}\n`, (userAnswer) => {
                if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                    score++;
                }
                currentIndex++;
                askQuestion();
            });
        } else {
            rl.close();
            console.log("Your score:", score);
        }
    };

    askQuestion();
}

// Start the quiz
startQuiz();
