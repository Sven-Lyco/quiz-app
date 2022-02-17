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

// ### 2. AnswerCard ###
// Bookmark
const buttonToggle2 = document.querySelector('[data-js=toggleBookmark2]');
buttonToggle2.addEventListener('click', () => {
  buttonToggle2.classList.toggle('card__bookmark--set');
});
// Show-Hide-Answer-Button
const buttonHideAnswer2 = document.querySelector('[data-js=hideAnswer2]');
const showAnswerTwo = document.querySelector('[data-js="answerTwo"]');
let isAnswer2Shown = true;
buttonHideAnswer2.addEventListener('click', () => {
  buttonHideAnswer2.classList.toggle('card__button-hide-answer');
  showAnswerTwo.toggleAttribute('hidden');
  if (isAnswer2Shown) {
    buttonHideAnswer2.textContent = 'Hide Answer';
    isAnswer2Shown = false;
  } else {
    buttonHideAnswer2.textContent = 'Show Answer';
    isAnswer2Shown = true;
  }
});

// ### 3. AnswerCard ###
// Bookmark
const buttonToggle3 = document.querySelector('[data-js=toggleBookmark3]');
buttonToggle3.addEventListener('click', () => {
  buttonToggle3.classList.toggle('card__bookmark--set');
});
// Show-Hide-Answer-Button
const buttonHideAnswer3 = document.querySelector('[data-js=hideAnswer3]');
const showAnswerThree = document.querySelector('[data-js="answerThree"]');
let isAnswer3Shown = true;
buttonHideAnswer3.addEventListener('click', () => {
  buttonHideAnswer3.classList.toggle('card__button-hide-answer');
  showAnswerThree.toggleAttribute('hidden');
  if (isAnswer3Shown) {
    buttonHideAnswer3.textContent = 'Hide Answer';
    isAnswer3Shown = false;
  } else {
    buttonHideAnswer3.textContent = 'Show Answer';
    isAnswer3Shown = true;
  }
});

// ### 1. AnswerCard ###
// Bookmark
const buttonToggle4 = document.querySelector('[data-js=toggleBookmark4]');
buttonToggle4.addEventListener('click', () => {
  buttonToggle4.classList.toggle('card__bookmark--set');
});
// Show-Hide-Answer-Button
const buttonHideAnswer4 = document.querySelector('[data-js=hideAnswer4]');
const showAnswerFour = document.querySelector('[data-js="answerFour"]');
let isAnswer4Shown = true;
buttonHideAnswer4.addEventListener('click', () => {
  buttonHideAnswer4.classList.toggle('card__button-hide-answer');
  showAnswerFour.toggleAttribute('hidden');
  if (isAnswer4Shown) {
    buttonHideAnswer4.textContent = 'Hide Answer';
    isAnswer4Shown = false;
  } else {
    buttonHideAnswer4.textContent = 'Show Answer';
    isAnswer4Shown = true;
  }
});

const hello = 'hello';
console.log(hello);
