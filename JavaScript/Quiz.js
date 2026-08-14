// Quiz.js
// A simple interactive quiz application.
// Demonstrates arrays, objects, DOM manipulation,event handling, application state, and scoring.

document.body.innerHTML = `
    <div id="quizApp">

        <h1>JavaScript Quiz</h1>

        <p id="questionNumber"></p>

        <h2 id="question"></h2>

        <div id="options"></div>

        <button id="nextButton">
            Next Question
        </button>

        <p id="result"></p>

    </div>
`;


// Quiz questions
const questions = [

    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: "const"
    },

    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },

    {
        question: "Which method adds an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "slice()"
        ],
        answer: "push()"
    },

    {
        question: "Which function is used to select an element by its ID?",
        options: [
            "querySelectorAll()",
            "getElementById()",
            "getElement()",
            "selectById()"
        ],
        answer: "getElementById()"
    },

    {
        question: "Which method removes the last element from an array?",
        options: [
            "shift()",
            "remove()",
            "pop()",
            "delete()"
        ],
        answer: "pop()"
    },

    {
        question: "Which symbol is used for strict equality comparison?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which method is commonly used to run a function after a specified delay?",
        options: [
            "setTimeout()",
            "setDelay()",
            "wait()",
            "delayFunction()"
        ],
        answer: "setTimeout()"
    },

    {
        question: "Which keyword is used to handle errors in JavaScript?",
        options: [
            "error-catch",
            "try...catch",
            "handle...error",
            "check...error"
        ],
        answer: "try...catch"
    }

];


// Application state
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// Get page elements
const questionNumber =
    document.getElementById("questionNumber");

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const nextButton =
    document.getElementById("nextButton");

const resultElement =
    document.getElementById("result");


// Display the current question
function displayQuestion() {

    const quizQuestion =
        questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent =
        quizQuestion.question;

    optionsElement.innerHTML = "";

    selectedAnswer = null;

    quizQuestion.options.forEach(option => {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.addEventListener(
            "click",
            function () {

                selectedAnswer = option;

                // Remove previous selection
                document
                    .querySelectorAll("#options button")
                    .forEach(button => {
                        button.style.fontWeight =
                            "normal";
                    });

                // Highlight selected option
                button.style.fontWeight =
                    "bold";
            }
        );

        optionsElement.appendChild(button);
    });
}


// Move to the next question
function nextQuestion() {

    if (selectedAnswer === null) {

        alert("Please select an answer.");

        return;
    }

    // Check the answer
    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {
        score++;
    }

    currentQuestion++;

    // Check whether the quiz is finished
    if (currentQuestion < questions.length) {

        displayQuestion();

    } else {

        showResult();
    }
}


// Display final result
function showResult() {

    questionNumber.textContent = "";

    questionElement.textContent =
        "Quiz Completed!";

    optionsElement.innerHTML = "";

    nextButton.style.display = "none";

    resultElement.textContent =
        `Your Score: ${score} / ${questions.length}`;
}


// Next button
nextButton.addEventListener(
    "click",
    nextQuestion
);


// Start the quiz
displayQuestion();
