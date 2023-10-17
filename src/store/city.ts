import { createSlice } from '@reduxjs/toolkit';
import { City } from '../types/data';

const initialState: City = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  name: 'Amsterdam',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {}
});

export default citySlice.reducer;
