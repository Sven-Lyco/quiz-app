function textCounter() {
  const textInputQuestion = document.querySelector(
    '[data-js="textAddQuestion"]'
  );
  const amountLeftAddQuestion = document.querySelector(
    '[data-js="amountLeftQuestionText"]'
  );
  const textInputAnswer = document.querySelector('[data-js="textAddAnswer"]');
  const amountLeftAddAnswer = document.querySelector(
    '[data-js="amountLeftAnswerText"]'
  );

  textInputQuestion.addEventListener('input', () => {
    const questionTextLength = textInputQuestion.value.length;
    const maxQuestionTextLength = textInputQuestion.maxLength;
    amountLeftAddQuestion.innerText =
      maxQuestionTextLength - questionTextLength;
  });

  textInputAnswer.addEventListener('input', () => {
    const questionTextLength = textInputAnswer.value.length;
    const maxQuestionTextLength = textInputAnswer.maxLength;
    amountLeftAddAnswer.innerText = maxQuestionTextLength - questionTextLength;
  });
}

export default textCounter;
