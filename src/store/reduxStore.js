import { configureStore } from '@reduxjs/toolkit'
import reduxReducer from '../reducer/reduxReducer'

export const store = configureStore({
  reducer: {
    redux: reduxReducer
  },
})
