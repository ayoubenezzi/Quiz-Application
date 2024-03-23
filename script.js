const quizData = [
  {
    question: "Where do you write javaScript?",
    a: "in the JS file",
    b: "in the CSS file",
    c: "in the JSX file",
    d: "in the HTML file",
    correct: "a",
  },
  {
    question: "Inside which HTML element do we put the javaScript?",
    a: "<script>",
    b: "<scripting>",
    c: "<js>",
    d: "<javascript>",
    correct: "a",
  },
  {
    question: "Where is the correct place to insert a javaScript?",
    a: "the <body> section",
    b: "both the <head> section and the <body> section",
    c: "the <head> section",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "msg('Hello World')",
    b: "alert('Hello World')",
    c: "print('Hello World')",
    d: "alert('Hello World')",
    correct: "d",
  },
  {
    question: "How to write an IF statement in javaScript?",
    a: "if i=5",
    b: "if i==5 then",
    c: "if i=5 then",
    d: "if (i==5)",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#Question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

const submitBtn = document.getElementById("Submit-btn");

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h1>You answered correctly ${score}/${quizData.length} question</h1>
    <button class="btn green" onclick="location.reload()">Try again</button>
    `;
  }
});
