const initialState = {
  name: "",
  email: "",
  uid: ""
};

export function userReducer(state=initialState, action){
  if(action.type ==='user'){
    return action.payload;
  }else{
    return state;
  }
}