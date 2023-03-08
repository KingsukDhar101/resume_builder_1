import { createStore } from "redux";
import rootReducer from "./Reducers/RootReducer";

const store = createStore(rootReducer);

store.subscribe(()=>{
  console.log(store.getState());
});

export default store;
