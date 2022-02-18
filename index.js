import navigation from './JS/navigation.js';

navigation();

// Set Bookmark
const bookmarkButtons = document.querySelectorAll('[data-js=toggleBookmark]');

bookmarkButtons.forEach(bookmarkButton => {
  bookmarkButton.addEventListener('click', () => {
    bookmarkButton.classList.toggle('card__bookmark--set');
  });
});
// Show-Hide-Answer-Button
const showAnswerButtons = document.querySelectorAll(
  '[data-js=showAnswerButton]'
);
const showAnswerText = document.querySelectorAll('[data-js="answerText"]');
let isAnswerShown = true;

showAnswerButtons.forEach(showAnswerButton => {
  showAnswerButton.addEventListener('click', () => {
    showAnswerText.toggleAttribute('hidden');
    if (isAnswerShown) {
      showAnswerButton.textContent = 'Hide Answer';
      isAnswerShown = false;
    } else {
      showAnswerButton.textContent = 'Show Answer';
      isAnswerShown = true;
    }
  });
});
