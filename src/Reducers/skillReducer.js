const initialState = [
  { id: 1, skill: "" },
  { id: 2, skill: "" },
  { id: 3, skill: "" },
  { id: 4, skill: "" },
];

export function skillReducer(state = initialState, action) {
  if (action.type == "skill") {
    return action.payload;
  } else {
    return state;
  }
}
