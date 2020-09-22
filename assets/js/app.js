import {
  createRadioOption,
  textNodeFactory,
  getElement,
  checkAndRender,
  removeChildren,
} from '/assets/js/functions.js';

const data = [
  {
    question: '¿Hace cuanto que no te bañas?',
    options: [
      { text: 'Obvio, ayer!', isCorrect: false },
      { text: 'Nunca lo hago!', isCorrect: true },
      { text: '¿La verdad? no lo se!', isCorrect: false },
    ],
    isReady: false,
  },
  {
    question: '¿Hiciste la Comida?',
    options: [
      { text: 'No hay nada para cocinar!', isCorrect: false },
      { text: 'No se cocinar!', isCorrect: false },
      { text: 'No, compre una pizza!', isCorrect: true },
    ],
    isReady: false,
  },
  {
    question: '¿A las caraotas se le pone ázucar?',
    options: [
      { text: 'Obvi!', isCorrect: false },
      { text: 'Claro que no!', isCorrect: false },
      { text: 'A veces si!', isCorrect: true },
    ],
    isReady: false,
  },
];
const score = [0]; // As an array to be available pass it as reference!
const renderQuestion = function (data) {
  if (currentQuestion) {
    const questionEL = getElement('question');
    const optionsDiv = getElement('questionnaire-options');
    removeChildren(questionEL, optionsDiv);
    questionEL.appendChild(textNodeFactory(currentQuestion.question));
    currentQuestion.options.forEach((option) => {
      const radioOptionEL = createRadioOption(option);
      optionsDiv.appendChild(radioOptionEL);
    });
  } else {
    console.log('No hay mas preguntas!');
  }
};
let currentQuestion = data.find((question) => question.isReady === false);

renderQuestion(currentQuestion); //first Question
const boton = document.getElementById('boton');
boton.addEventListener('click', function (event) {
  checkAndRender.apply(null, [event, currentQuestion, score]); //I don't if this is the better way, but it works!
  currentQuestion = data.find((question) => question.isReady === false);
  if (currentQuestion) {
    //TODO Check if there is any radio button checked!
    renderQuestion(currentQuestion);
  } else {
    const resultsContent = document.getElementById('questionnaire-item');
    resultsContent.innerHTML = `<h2> Your score was ${score[0]}</h2>
                                <button onclick="location.reload()"
                                class="questionnaire-item-button"
                                >
                                  Reload
                                </button>`;
  }
});
