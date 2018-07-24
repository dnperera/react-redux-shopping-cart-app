"use strict";
//Post Book Action
export const postBooks = book => {
  return {
    type: "POST_BOOKS",
    payload: book
  };
};
//Delete Book
export const deleteBook = id => {
  return {
    type: "DELETE_BOOK",
    payload: id
  };
};

//Update Book
export const updateBook = book => {
  return {
    type: "UPDATE_BOOK",
    payload: book
  };
};
