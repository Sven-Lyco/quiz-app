// ### 1. AnswerCard ###
// Bookmark
const buttonToggle1 = document.querySelector('[data-js=toggleBookmark1]');
buttonToggle1.addEventListener('click', () => {
  buttonToggle1.classList.toggle('card__bookmark--set');
});
// Show-Hide-Answer-Button
const buttonHideAnswer1 = document.querySelector('[data-js=hideAnswer1]');
const showAnswerOne = document.querySelector('[data-js="answerOne"]');
let isAnswer1Shown = true;
buttonHideAnswer1.addEventListener('click', () => {
  buttonHideAnswer1.classList.toggle('card__button-hide-answer');
  showAnswerOne.toggleAttribute('hidden');
  if (isAnswer1Shown) {
    buttonHideAnswer1.textContent = 'Hide Answer';
    isAnswer1Shown = false;
  } else {
    buttonHideAnswer1.textContent = 'Show Answer';
    isAnswer1Shown = true;
  }
});
