import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    Addrecipe:(state,action) => {
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { Addrecipe} = recipeSlice.actions

export default recipeSlice.reducer