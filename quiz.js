function createBlinkingLights() {
    const blinkingLightsContainer = document.createElement("div");
    blinkingLightsContainer.classList.add("blinking-lights-container");

    for (let i = 0; i < 5; i++) {
        const blinkingLight = document.createElement("div");
        blinkingLight.classList.add("blinking-light");
        blinkingLightsContainer.appendChild(blinkingLight);
    }

    document.body.appendChild(blinkingLightsContainer);
}

// Call this function to create blinking lights when the page loads
createBlinkingLights();
document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "Which planet is known as the Red Planet?", answer: "Mars" },
        // Add more questions as needed
    ];

    let currentQuestionIndex = 0;

    function displayQuestion() {
        const questionText = document.getElementById("question-text");
        questionText.textContent = questions[currentQuestionIndex].question;
    }

    function checkAnswer() {
        const userAnswer = document.getElementById("answer-input").value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        const resultText = document.getElementById("result");

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            resultText.textContent = "Correct! Moving to the next question.";
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                resultText.textContent = "Congratulations! You've completed the quiz.";
            }
        } else {
            resultText.textContent = "Incorrect. Try again.";
        }
    }

    // Initial setup
    displayQuestion();
});
