/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CardFormData } from '../interfaces/cardForm';

export const cadsFormSlice = createSlice({
  name: 'cardsForm',
  initialState: {
    value: [] as CardFormData[],
    currentCard: {} as CardFormData,
  },
  reducers: {
    addNewCard: (state, action) => {
      state.value.push(action.payload);
    },
    addCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },
  },
});

export const { addNewCard, addCurrentCard } = cadsFormSlice.actions;
export default cadsFormSlice.reducer;
