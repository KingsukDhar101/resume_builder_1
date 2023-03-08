const initialState = {
  name: "",
  email: "",
  address: "",
  city: "",
  country: "",
  phoneno: "",
};

function contactReducer(state = initialState, action) {
  if (action.type === "contact") {
    return action.payload;
  } else {
    return state;
  }
}

export { contactReducer };
