const cardsData = [
  {
    question: 'What does the abbreviation HTML stand for?',
    answer: 'Hypertext Markup Language',
    tags: ['HTML', 'Basic', 'Web', 'Bootcamp'],
  },
  {
    question: "What is the 'box-model'?",
    answer: 'it describes and determines the individual layers of an element',
    tags: ['CSS', 'Basic', 'HTML', 'Bootcamp'],
  },
  {
    question: 'What does git stand for?',
    answer: 'greater integration terminal',
    tags: ['Shell', 'Git', 'Web', 'Bootcamp'],
  },
  {
    question: 'What is GitHub mainly used for?',
    answer: 'hosting, version control, and collaboration',
    tags: ['Git', 'GitHub', 'Web', 'Bootcamp'],
  },
];

function renderCards(cardList) {
  cardList.forEach(card => {
    const cardElement = document.createElement('section');
    cardElement.className = 'card';
    cardElement.setAttribute('data-js', 'card');
    cardElement.innerHTML = `
    <h2 class="card__title">Question:</h2>
          <button
            data-js="Bookmark"
            aria-pressed="false"
            aria-label="bookmark"
            class="card__bookmark"
          >
            <i class="material-icons" style="color: white"> bookmark_border </i>
          </button>
          <p class="card__question">
            ${card.question}
          </p>
          <button
            aria-label="AnswerButton"
            data-js="showAnswerButton"
            aria-expanded="false"
            class="card__button"
            type="button"
          >
            Show Answer
          </button>
          <div data-js="answerText" hidden>
            <h2 class="card__title">Answer:</h2>
            <p class="card__answer">${card.answer}</p>
          </div>
          <ul class="card__tag-group" role="list">
            ${card.tags
              .map(tag => `<li class="card__tag">${tag}</li>`)
              .join('')}
          </ul>
    `;
    const main = document.querySelector('[data-page="home"]');
    main.appendChild(cardElement);
  });
}

function cards() {
  renderCards(cardsData);
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
