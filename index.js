// ### 1. QuestionCard ###
//Variable zum Ändern der Hintergrundfarbe im Bookmark
const buttonToggle = document.querySelector('[data-js=toggleBookmark]');
//Ändere die Hintergrundfarbe von den Card-Bookmarks
buttonToggle.addEventListener('click', () => {
  buttonToggle.classList.toggle('card__bookmark--set');
});
//Ändere die Hintergrundfarbe und Border-Color von Show-Answer
const buttonShowAnswer = document.querySelector('[data-js=showAnswer]');
buttonShowAnswer.addEventListener('click', () => {
  buttonShowAnswer.classList.toggle('card__button-hide-answer');
});

//1. AnswerCard
const buttonToggle1 = document.querySelector('[data-js=toggleBookmark1]');
buttonToggle1.addEventListener('click', () => {
  buttonToggle1.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer = document.querySelector('[data-js=hideAnswer]');
buttonHideAnswer.addEventListener('click', () => {
  buttonHideAnswer.classList.toggle('card__button-hide-answer');
});

//2. QuestionCard
const buttonToggle2 = document.querySelector('[data-js=toggleBookmark2]');
buttonToggle2.addEventListener('click', () => {
  buttonToggle2.classList.toggle('card__bookmark--set');
});
const buttonShowAnswer1 = document.querySelector('[data-js=showAnswer1]');
buttonShowAnswer1.addEventListener('click', () => {
  buttonShowAnswer1.classList.toggle('card__button-hide-answer');
});

//2. AnswerCard
const buttonToggle3 = document.querySelector('[data-js=toggleBookmark3]');
buttonToggle3.addEventListener('click', () => {
  buttonToggle3.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer1 = document.querySelector('[data-js=hideAnswer1]');
buttonHideAnswer1.addEventListener('click', () => {
  buttonHideAnswer1.classList.toggle('card__button-hide-answer');
});

//3. QuestionCard
const buttonToggle4 = document.querySelector('[data-js=toggleBookmark4]');
buttonToggle4.addEventListener('click', () => {
  buttonToggle4.classList.toggle('card__bookmark--set');
});
const buttonShowAnswer2 = document.querySelector('[data-js=showAnswer2]');
buttonShowAnswer2.addEventListener('click', () => {
  buttonShowAnswer2.classList.toggle('card__button-hide-answer');
});

//3. AnswerCard
const buttonToggle5 = document.querySelector('[data-js=toggleBookmark5]');
buttonToggle5.addEventListener('click', () => {
  buttonToggle5.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer2 = document.querySelector('[data-js=hideAnswer2]');
buttonHideAnswer2.addEventListener('click', () => {
  buttonHideAnswer2.classList.toggle('card__button-hide-answer');
});

//4. QuestionCard
const buttonToggle6 = document.querySelector('[data-js=toggleBookmark6]');
buttonToggle6.addEventListener('click', () => {
  buttonToggle6.classList.toggle('card__bookmark--set');
});
const buttonShowAnswer3 = document.querySelector('[data-js=showAnswer3]');
buttonShowAnswer3.addEventListener('click', () => {
  buttonShowAnswer3.classList.toggle('card__button-hide-answer');
});

//4. AnswerCard
const buttonToggle7 = document.querySelector('[data-js=toggleBookmark7]');
buttonToggle7.addEventListener('click', () => {
  buttonToggle7.classList.toggle('card__bookmark--set');
});
const buttonHideAnswer3 = document.querySelector('[data-js=hideAnswer3]');
buttonHideAnswer3.addEventListener('click', () => {
  buttonHideAnswer3.classList.toggle('card__button-hide-answer');
});
