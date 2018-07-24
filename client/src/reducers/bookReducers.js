"use strict";
const bookReducers = (state = { books: [] }, action) => {
  switch (action.type) {
    case "POST_BOOKS":
      return { books: [...state, ...action.payload] };
      break;
    case "DELETE_BOOK":
      //create a copy of the current book list from the stat
      let currentList = [...state.books];
      //delete the releated id with book
      let newList = currentList.filter(book => book.id !== action.payload.id);
      return { books: newList };
      break;
    case "UPDATE_BOOK":
      //create a copy of the current book list from the stat
      let bookList = [...state.books];
      //delete the releated id with book
      bookList.forEach(book => {
        if (book.id !== action.payload.id) {
          book.title = action.payload.title;
        }
      });
      return { books: bookList };
      break;

    default:
      return state;
      break;
  }
};
export default bookReducers;
