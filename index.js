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

//Home
const pageHome = document.querySelector('[data-page="home"]');
const pageBookmarks = document.querySelector('[data-page=bookmarks]');
const pageCreate = document.querySelector('[data-page=create]');
const pageProfile = document.querySelector('[data-page=profile]');

const buttonHome = document.querySelector('[data-nav="home"]');
const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
const buttonCreate = document.querySelector('[data-nav="create"]');
const buttonProfile = document.querySelector('[data-nav="profile"]');

buttonHome.addEventListener('click', () => {
  pageHome.classList.remove('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  buttonHome.classList.add('navigation__button--set');
  buttonBookmarks.classList.remove('navigation__button--set');
  buttonCreate.classList.remove('navigation__button--set');
  buttonProfile.classList.remove('navigation__button--set');
});

buttonBookmarks.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  buttonHome.classList.remove('navigation__button--set');
  buttonBookmarks.classList.add('navigation__button--set');
  buttonCreate.classList.remove('navigation__button--set');
  buttonProfile.classList.remove('navigation__button--set');
});

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.remove('hidden');
  pageProfile.classList.add('hidden');
  buttonHome.classList.remove('navigation__button--set');
  buttonBookmarks.classList.remove('navigation__button--set');
  buttonCreate.classList.add('navigation__button--set');
  buttonProfile.classList.remove('navigation__button--set');
});

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.remove('hidden');
  buttonHome.classList.remove('navigation__button--set');
  buttonBookmarks.classList.remove('navigation__button--set');
  buttonCreate.classList.remove('navigation__button--set');
  buttonProfile.classList.add('navigation__button--set');
});

console.log(pageHome);
