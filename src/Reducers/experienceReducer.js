const initialState = {
  jobtitle: "",
  company: "",
  city: "",
  country: "",
  startmonth: "",
  startyear: "",
  endmonth: "",
  endyear: "",
  checkWork: "",
};

export function experienceReducer(state = initialState, action) {
  if (action.type === "experience") {
    return action.payload;
  } else {
    return state;
  }
}
