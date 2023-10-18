import { createSlice } from '@reduxjs/toolkit';
import { Offers } from '../types/data';
import { offers } from '../mock/offers';

const initialState: Offers = offers;

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    set: (state) => {
      state.length = 0;
      state.push({
        bedrooms: 3,
        city: {
          location: {
            latitude: 50.935173,
            longitude: 6.953101,
            zoom: 10
          },
          name: 'Cologne'
        },
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine',
          'Dishwasher'],
        host: {
          avatarUrl: 'img/1.png',
          id: 3,
          isPro: true,
          name: 'Angelina'
        },
        id: 4,
        images: ['img/1.png', 'img/2.png'],
        isFavorite: true,
        isPremium: false,
        location: {
          latitude: 50.935173,
          longitude: 6.953101,
          zoom: 8
        },
        maxAdults: 4,
        previewImage: 'img/1.png',
        price: 120,
        rating: 1,
        title: 'Beautiful & luxurious studio at great location',
        type: 'apartment'
      });
    }
  }
});

export const {set: setOffers} = offersSlice.actions;

export default offersSlice.reducer;
