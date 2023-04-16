import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import searchReducer from './search';
import cadsFormReducer from './cardsForm';
import { apiCharacter } from './API';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cardsForm: cadsFormReducer,
    [apiCharacter.reducerPath]: apiCharacter.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiCharacter.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
