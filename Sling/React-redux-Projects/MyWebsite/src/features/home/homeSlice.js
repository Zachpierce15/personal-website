import { createSlice } from '@reduxjs/toolkit'

export const homePageSlice = createSlice({
  name: 'Home Page Images',
  initialState: {
    images: []
  },
  reducers: {
    addImages: (state, action) => {
      state.images = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addImages } = homePageSlice.actions

export default homePageSlice.reducer