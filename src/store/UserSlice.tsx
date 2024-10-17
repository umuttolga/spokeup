import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'data',
  initialState: {
    appData: null,
  },
  reducers: {
    setData: (state, action) => {
      state.appData = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {setData} = userSlice.actions;

export default userSlice.reducer;
