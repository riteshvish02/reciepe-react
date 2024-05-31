import { configureStore } from '@reduxjs/toolkit'
import recipeSlice  from './reducer/recipereducer'

export const store = configureStore({
  reducer: {
    recipeSlice:recipeSlice
  },
})