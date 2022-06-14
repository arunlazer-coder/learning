import {
  action,
  createStore,
} from "easy-peasy";

export const store = createStore({
    data: {
      likes: 0,
      numComments: 0,
      incrementLikes: action((state, payload) => {
        state.likes=state.likes+payload;
      }),
      incrementNumComments: action(state => {
        state.numComments++;
      })
    }
  });