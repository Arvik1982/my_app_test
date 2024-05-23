import { configureStore } from '@reduxjs/toolkit';
import countriesSliceReducer from './slices/listCountriesSlice';

export default configureStore({
  reducer: {
    countriesReducer: countriesSliceReducer,
  },
});
