const quizData = [
  {
    question: "01. What is my favorite food?",
    a: "Fried Rice",
    b: "Milk Rice with Chicken Curry",
    c: "Spagetti",
    d: "Koththu",
    correct: "a",
  },
  {
    question: "02. What is my favorite color?",
    a: "Pink",
    b: "Green",
    c: "Purple",
    d: "Black",
    correct: "c",
  },
  {
    question: "03. What I usually doing?",
    a: "Watching Cricket",
    b: "Watching Tv Series",
    c: "Coding",
    d: "Sleeping",
    correct: "c",
  },
  {
    question: "04. What is my symbolic thing that I like?",
    a: "Mountain",
    b: "Laptop",
    c: "Fish",
    d: "Shoes",
    correct: "a",
  },
  {
    question: "05. What is my favorite thing of you?",
    a: "Kindness",
    b: "Overthinking",
    c: "Beauty",
    d: "Have good attitudes",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const questionsEl = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

nextQuiz();

function nextQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionsEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      nextQuiz();
    } else {
      quiz.innerHTML = `<h2>You have got ${score}/${quizData.length} </h2>`;
    }
  }
});
