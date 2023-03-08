const initialState = "";

export function summaryReducer(state=initialState, action){
  if(action.type === "summary"){
    return action.payload;
  }else{
    return state;
  }
}