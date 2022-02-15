//Variable zum Ändern der Hintergrundfarbe
const buttonToggle = document.querySelector('[data-js=toggleBookmark]');

//Ändere die Hintergrundfarbe von den Card-Bookmarks
buttonToggle.addEventListener('click', () => {
  buttonToggle.classList.toggle('card__bookmark--set');
});
