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
    }

    // Expose the startQuiz and checkAnswer functions globally
    window.startQuiz = startQuiz;
    window.checkAnswer = checkAnswer;
});
