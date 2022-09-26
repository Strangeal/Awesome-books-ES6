export const removeBook = () => {
  const removeBtn = [...document.getElementsByClassName('remove-btn')];
  removeBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      bookList.splice(e.target.id, 1);
      localStorage.setItem('storedBooks', JSON.stringify(bookList));
      this.renderBooks();
    });
  });
};
removeBook();