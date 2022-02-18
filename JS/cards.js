function cards() {
  const cardSet = document.querySelectorAll('[data-js=card]');

  cardSet.forEach(card => {
    const bookmarkButton = card.querySelector('[data-js=Bookmark]');
    const showAnswerButton = card.querySelector('[data-js=showAnswerButton]');
    const showAnswerText = card.querySelector('[data-js="answerText"]');
    let isAnswerShown = true;

    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('card__bookmark--set');
    });

    showAnswerButton.addEventListener('click', () => {
      showAnswerText.toggleAttribute('hidden');
      showAnswerButton.classList.toggle('card__button-hide-answer');

      if (isAnswerShown) {
        showAnswerButton.textContent = 'Hide Answer';
        isAnswerShown = false;
      } else {
        showAnswerButton.textContent = 'Show Answer';
        isAnswerShown = true;
      }
    });
  });
}

export default cards;
