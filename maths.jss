let score = 0;
let currentAnswer = 0;
let questionIndex = 0;

// DOM Elements
const questionDisplay = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const statusDisplay = document.getElementById('status');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('next-question');

// List of operations
const operations = ['+', '-', '*', '/'];

// Function to generate a random math question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let question = `${num1} ${operation} ${num2}`;
    currentAnswer = calculateAnswer(num1, num2, operation);
    
    questionDisplay.textContent = `What is ${question}?`;
}

// Function to calculate the answer
function calculateAnswer(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return (num1 / num2).toFixed(2); // Keep two decimal places for division
        default:
            return 0;
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function() {
    const userAnswer = parseFloat(answerInput.value);
    
    if (userAnswer === currentAnswer) {
        score++;
        statusDisplay.textContent = 'Correct! 🎉';
    } else {
        statusDisplay.textContent = `Oops! The correct answer was ${currentAnswer}. 😢`;
    }

    // Update score display
    scoreDisplay.textContent = score;

    // Show next question button
    nextButton.style.display = 'inline-block';
    submitButton.disabled = true;
    answerInput.disabled = true;
});

// Event listener for the next question button
nextButton.addEventListener('click', function() {
    answerInput.value = '';
    answerInput.disabled = false;
    submitButton.disabled = false;
    nextButton.style.display = 'none';
    generateQuestion();
    statusDisplay.textContent = '';
});

// Initialize the game with a random question
generateQuestion();
