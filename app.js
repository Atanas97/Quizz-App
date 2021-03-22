const quizData = [
    {
        question: 'Колко е 8 + 5 ?',
        a: '17',
        b: '43',
        c: '13',
        d: '12',
        correct: 'c'
    }, {
        question: 'Коя е столицата на България ?',
        a: 'София',
        b: 'Пловдив',
        c: 'Дупница',
        d: 'България на три морета',
        correct: 'a'
    }, {
        question: 'Какво е пълното наименование на CSS ?',
        a: 'Cascading selector styles',
        b: 'Contrast & Selectors & Styles',
        c: 'I dont know',
        d: 'Cascading style sheet',
        correct: 'd'
    }, {
        question: 'Каква е височината на връх Мусала ?',
        a: '2133 метра',
        b: '2496 метра',
        c: '2925 метра',
        d: '3146 метра',
        correct: 'c'
    }, {
        question: 'Кой е президентът на България ?',
        a: 'Бойко Борисов',
        b: 'Румен Радев',
        c: 'Ники Кънчев',
        d: 'Веселин Маринов',
        correct: 'b'
    }, {
        question: 'Кой е най-якият лектор ?',
        a: 'Бойлер',
        b: 'Есе',
        c: 'Николай Найденов',
        d: 'Мишо',
        correct: 'c'
    }

]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

//uncheck radio button
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Ти отговори правилно на ${score}/${quizData.length} въпроса!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
