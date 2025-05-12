// Correct answers for the quiz
const correctAnswers = {
    1: 'They', 2: 'his', 3: 'He', 4: 'his', 5: 'She', 
    6: 'takes', 7: 'Her', 8: 'They', 9: 'love', 10: 'their', 
    11: 'goes', 12: 'She', 13: 'studies', 14: 'her', 15: 'He', 
    16: 'plays', 17: 'His', 18: 'wins', 19: 'eat', 20: 'They', 
    21: 'talk', 22: 'their', 23: 'She', 24: 'does', 25: 'her', 
    26: 'watches', 27: 'They', 28: 'go', 29: 'their', 30: 'want'
};

// Get all input elements
const blankInputs = document.querySelectorAll('.blank');
const checkAnswersBtn = document.getElementById('checkAnswers');
const resetQuizBtn = document.getElementById('resetQuiz');
const resultsDiv = document.getElementById('results');

// Check answers function
function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    blankInputs.forEach(input => {
        const number = input.dataset.number;
        const userAnswer = input.value.trim();
        const correctAnswer = correctAnswers[number];

        // Case-insensitive comparison
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            correctCount++;
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            incorrectCount++;
        }
    });

    // Display results
    resultsDiv.innerHTML = `
        <p>Correct Answers: ${correctCount}</p>
        <p>Incorrect Answers: ${incorrectCount}</p>
        <p>Score: ${Math.round((correctCount / blankInputs.length) * 100)}%</p>
    `;
}

// Reset quiz function
function resetQuiz() {
    blankInputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'incorrect');
    });
    resultsDiv.innerHTML = '';
}

// Add event listeners
checkAnswersBtn.addEventListener('click', checkAnswers);
resetQuizBtn.addEventListener('click', resetQuiz);

// Optional: Add event listener to clear individual input styling on typing
blankInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('correct', 'incorrect');
    });
});