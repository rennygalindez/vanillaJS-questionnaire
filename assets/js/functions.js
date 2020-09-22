const checkAnswer = function (question) {
  console.log(arguments);
  let radios = document.getElementsByName('radios');
  let checked = Array.from(radios).find((radio) => radio.checked === true);
  for (const option of question.options) {
    if (option.text === checked.value && option.isCorrect) {
      return true;
    }
  }
  return false;
};

const radioFactory = (radioGroup, type, value) => {
  let radio = document.createElement('input');
  radio.name = radioGroup;
  radio.type = type;
  radio.value = value;
  return radio;
};

export function removeChildren(...parents) {
    parents.forEach((parent) => {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    });
}

export function createRadioOption(option) {
  let label = document.createElement('label');
  let radio = radioFactory('radios', 'radio', option.text);
  let labelTex = textNodeFactory(option.text);
  label.appendChild(radio);
  label.appendChild(labelTex);
  return label;
}

export function textNodeFactory(text) {
  return document.createTextNode(text);
}
export function getElement(id) {
  return document.getElementById(id);
}

export function checkAndRender(event, currenQuestion, score) {
  if (checkAnswer(currenQuestion)) {
    console.log('Acertastes!');
    score[0]++;
    console.log(score[0]);
  }
  currenQuestion.isReady = true;
  console.log(currenQuestion);
}
