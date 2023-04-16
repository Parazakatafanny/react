/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    currentValue: '',
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
    setCurrentValue: (state, action) => {
      state.currentValue = action.payload;
    },
  },
});

export const { setSearchValue, setCurrentValue } = searchSlice.actions;
export default searchSlice.reducer;
