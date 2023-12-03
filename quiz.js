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
        const quizContainer = document.getElementById("quiz-container");
        const audio = document.getElementById("myAudio");

        // Hide the quiz container initially
        quizContainer.style.display = "none";

        // Play audio when the quiz starts
        audio.play();

        // Display the first question
        displayQuestion();

        // Start the headlights
        startHeadlights();
    }

    function checkAnswer() {
        // Your existing checkAnswer function
    }

    function startHeadlights() {
        // Your existing startHeadlights function
        function startHeadlights() {
    const headlightsContainer = document.createElement("div");
    headlightsContainer.className = "headlights-container";
    document.body.appendChild(headlightsContainer);

    for (let i = 0; i < 4; i++) {
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
}

    }

    // Expose the startQuiz and checkAnswer functions globally
    window.startQuiz = startQuiz;
    window.checkAnswer = checkAnswer;
});
