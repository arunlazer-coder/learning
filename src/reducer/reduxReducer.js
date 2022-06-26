import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes:0,
    numComments:0
}

export const reduxSlice = createSlice({
    name:"redux",
    initialState,
    reducers:{
          incrementLikes: (state, action) => {
              state.likes = state.likes + action.payload;
            },
          incrementNumComments: (state) => {
            state.numComments++;
          }
    }
})

export const {incrementLikes , incrementNumComments} = reduxSlice.actions

export default reduxSlice.reducer