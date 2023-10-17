import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './city';
import offersReducer from './offers';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    offers: offersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
