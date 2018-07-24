import { createStore } from "redux";
//Import Combine reducer
import reducers from "./reducers/index";
//Import cation action creator
import { addToCart } from "./actions/cartActions";
import { postBooks } from "./actions/bookActions";
const store = createStore(reducers);

store.subscribe(() => {
  console.log("current state is --", store.getState());
});
//Dispatch Post Book Action
store.dispatch(
  postBooks([
    {
      id: 1,
      title: "Harry Poter and Life",
      decription:
        "This is  a series of books which will explain the child hood of Harry",
      price: 35.5
    },
    {
      id: 2,
      title: "Russian Election Hack",
      decription:
        "This is  a series of books which will explain truth behind the 2016 election",
      price: 45.5
    },
    {
      id: 3,
      title: "Loard of the Rings",
      decription:
        "This is  a series of books which will explain the child hood of Loard and ring",
      price: 55.5
    }
  ])
);
//Dispatch Action addtocart
store.dispatch(addToCart([{ id: 1 }]));
//to get the current state of the store
