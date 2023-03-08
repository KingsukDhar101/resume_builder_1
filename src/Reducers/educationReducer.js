const initialState = {
  school: "",
  city: "",
  country: "",
  degree: "",
  gradmonth: "",
  gradyear: "",
};

export function educationReducer(state = initialState, action) {
  if (action.type === "education") {
    return action.payload;
  } else {
    return state;
  }
}
