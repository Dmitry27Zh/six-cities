import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      const cityName = action.payload;
      const city = [{
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 10,
        },
        name: 'Amsterdam',
      }, {
        location: {
          latitude: 50.935173,
          longitude: 6.953101,
          zoom: 10
        },
        name: 'Cologne'
      }].find(({name}) => name === cityName);

      if (city) {
        Object.assign(state, city);
      }
    }
  }
});

export const {change: changeCity} = citySlice.actions;

export default citySlice.reducer;
