export const reducer = (state, action) => {
  switch (action.type) {
    case "TextChange":
        return {...state, text:action.payload}
    case "colorChange":
        return {...state, color:action.payload}

    default:
        return state
  }
};
