import { timeDate, date } from './modules/date.js';  // eslint-disable-line
import * as nav from './modules/nav.js';  // eslint-disable-line
import Library from './modules/libraryClass.js'; // eslint-disable-line

const displayBooks = new Library();
displayBooks.addBook();
displayBooks.renderBooks();
