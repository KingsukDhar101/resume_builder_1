const initialState = "black";

export function colorReducer(state = initialState, action) {
  if (action.type == "color") {
    return action.payload;
  } else {
    return state;
  }
}
