import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//logger display (log) redux state on the chrome developer console
import { logger } from "redux-logger";
//Import Combine reducer
import reducers from "./reducers/index";
//Import cation action creator
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBook, updateBook } from "./actions/bookActions";

//Import BookList
import BookList from "./components/pages/bookList";

//Create redux store and apply middle ware
const middleWare = applyMiddleware(logger);
const store = createStore(reducers, middleWare);

//Dispatch Post Book Action
// store.dispatch(
//   postBooks([

//   ])
// );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BookList />
      </Provider>
    );
  }
}
export default App;
// //Dispatch delete book
// store.dispatch(deleteBook({ id: 1 }));

// //Dispatch update Book
// store.dispatch(
//   updateBook({
//     id: 2,
//     title: "Russian Roulette: The Inside Story of Putins War on America"
//   })
// );
// //Dispatch Action addtocart
// store.dispatch(addToCart([{ id: 1 }]));
// //to get the current state of the store
