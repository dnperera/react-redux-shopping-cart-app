"use strict";
//Post Book Action
export const postBooks = book => {
  return {
    type: "POST_BOOKS",
    payload: book
  };
};
