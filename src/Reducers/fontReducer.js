const initialState = "";

function fontSizeReducer(state=initialState, action){
  if(action.type === 'fontsize'){
    return action.payload;
  }else{
    return state;
  }
}

function fontStyleReducer(state = initialState, action) {
  if (action.type === "fontstyle") {
    return action.payload;
  } else {
    return state;
  }
}
export {fontSizeReducer, fontStyleReducer};

