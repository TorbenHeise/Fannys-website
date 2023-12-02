function startHeadlights() {
    // Create headlights
    const headlights = document.createElement("div");
    headlights.className = "headlights";
    document.body.appendChild(headlights);

    // Move headlights across the screen
    let position = 0;
    const moveInterval = setInterval(() => {
        position += 5; // Adjust the speed as needed
        headlights.style.left = position + "px";
        if (position > window.innerWidth) {
            position = -headlights.offsetWidth;
        }
    }, 50); // Adjust the interval as needed
}

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

    function startQuiz() {
        const startButton = document.getElementById("startButton");
        const quizContainer = document.getElementById("quiz-container");
        const audio = document.getElementById("myAudio");

        startButton.style.display = "none";
        quizContainer.style.display = "block";
        audio.play();
        displayQuestion();
        startHeadlights(); // Added this line to start the headlights
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

    function startHeadlights() {
        // Create headlights
        const headlights = document.createElement("div");
        headlights.className = "headlights";
        document.body.appendChild(headlights);

        // Move headlights across the screen
        let position = 0;
        const moveInterval = setInterval(() => {
            position += 5; // Adjust the speed as needed
            headlights.style.left = position + "px";
            if (position > window.innerWidth) {
                position = -headlights.offsetWidth;
            }
        }, 50); // Adjust the interval as needed
    }

    window.startQuiz = startQuiz;
    window.checkAnswer = checkAnswer;
});
