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
        startHeadlights();  // Call startHeadlights when the quiz starts
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
        const headlightsContainer = document.createElement("div");
        headlightsContainer.className = "headlights-container";
        document.body.appendChild(headlightsContainer);

        function createHeadlight() {
            const headlights = document.createElement("div");
            headlights.className = "headlights";
            headlightsContainer.appendChild(headlights);

            let position = 0;
            let isMovingRight = true;

            function moveHeadlights() {
                if (position > window.innerWidth / 2 - headlights.offsetWidth) {
                    isMovingRight = false;
                } else if (position < -window.innerWidth / 2) {
                    isMovingRight = true;
                }

                position += isMovingRight ? 5 : -5;
                headlights.style.left = position + "px";
            }

            setInterval(moveHeadlights, 50);
        }

        // Call createHeadlight function only once when the quiz starts
        createHeadlight();
    }

    window.startQuiz = startQuiz;
    window.checkAnswer = checkAnswer;
});
