//1. AnswerCard
const buttonToggle1 = document.querySelector('[data-js=toggleBookmark1]');
buttonToggle1.addEventListener('click', () => {
  buttonToggle1.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer = document.querySelector('[data-js=hideAnswer]');
const showAnswerOne = document.querySelector('[data-js="answerOne"]');
buttonHideAnswer.addEventListener('click', () => {
  buttonHideAnswer.classList.toggle('card__button-hide-answer');
  showAnswerOne.toggleAttribute('hidden');
});

//2. AnswerCard
const buttonToggle3 = document.querySelector('[data-js=toggleBookmark3]');
buttonToggle3.addEventListener('click', () => {
  buttonToggle3.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer1 = document.querySelector('[data-js=hideAnswer1]');
const showAnswerTwo = document.querySelector('[data-js="answerTwo"]');
buttonHideAnswer1.addEventListener('click', () => {
  buttonHideAnswer1.classList.toggle('card__button-hide-answer');
  showAnswerTwo.toggleAttribute('hidden');
});

//3. AnswerCard
const buttonToggle5 = document.querySelector('[data-js=toggleBookmark5]');
buttonToggle5.addEventListener('click', () => {
  buttonToggle5.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer2 = document.querySelector('[data-js=hideAnswer2]');
const showAnswerThree = document.querySelector('[data-js="answerThree"]');
buttonHideAnswer2.addEventListener('click', () => {
  buttonHideAnswer2.classList.toggle('card__button-hide-answer');
  showAnswerThree.toggleAttribute('hidden');
});

//4. AnswerCard
const buttonToggle7 = document.querySelector('[data-js=toggleBookmark7]');
buttonToggle7.addEventListener('click', () => {
  buttonToggle7.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer3 = document.querySelector('[data-js=hideAnswer3]');
const showAnswerFour = document.querySelector('[data-js="answerFour"]');
buttonHideAnswer3.addEventListener('click', () => {
  buttonHideAnswer3.classList.toggle('card__button-hide-answer');
  showAnswerFour.toggleAttribute('hidden');
});
