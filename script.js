const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyper Tool Multi Language",
        d: "None",
        correct: "a",
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c",
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll("input[name='answer']");
const submitBtn = document.getElementById("submit");

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    document.getElementById("a_text").innerText = currentQuizData.a;
    document.getElementById("b_text").innerText = currentQuizData.b;
    document.getElementById("c_text").innerText = currentQuizData.c;
    document.getElementById("d_text").innerText = currentQuizData.d;
}

function deselectAnswers() {
    answersEls.forEach(answer => answer.checked = false);
}

function getSelected() {
    let answer;
    answersEls.forEach(ans => {
        if (ans.checked) answer = ans.id;
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector(".quiz-container").innerHTML =
                `<h2>You scored ${score}/${quizData.length}</h2>
                 <button onclick="location.reload()">Restart</button>`;
        }
    }
});

loadQuiz();
