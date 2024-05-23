import { createSlice } from '@reduxjs/toolkit';
import { nameType } from '../../types/types';

const countriesSlice = createSlice({
  name: 'countries',

  initialState: {
    allCountries: [],
    listCountriesStore: [],
    filterOn: false,
  },
  reducers: {
    setAllCountries(state, action) {
      state.allCountries = action.payload;
      localStorage.getItem('listCountries') === null
        ? localStorage.setItem('listCountries', JSON.stringify(action.payload))
        : '';
    },
    setListCountriesStore(state, action) {
      state.listCountriesStore = action.payload;
    },
    setCountryFilterLiked(state) {
      let tempArr: [] = JSON.parse(localStorage.getItem('listCountries') || '');
      let newArr = tempArr.filter((el: nameType) => {
        return el.name.isLiked === true;
      });
      state.listCountriesStore = newArr;
      state.filterOn = true;
    },
    setCountryFilterAll(state) {
      let tempArr: [] = JSON.parse(localStorage.getItem('listCountries') || '');
      state.listCountriesStore = tempArr;
      state.filterOn = false;
    },
    setCountryClickLike(state, action) {
      state.filterOn ? (state.filterOn = false) : '';
      let name = action.payload;
      let tempArr: [] = JSON.parse(localStorage.getItem('listCountries') || '');
      tempArr.forEach((el: nameType) => {
        el.name.common === name
          ? el.name.isLiked === true
            ? (el.name.isLiked = false)
            : (el.name.isLiked = true)
          : '';
      });
      localStorage.setItem('listCountries', JSON.stringify(tempArr));
      state.listCountriesStore = tempArr;
    },
    setCountryClickDelete(state, action) {
      let name = action.payload.name.common;
      let tempArr: [] = JSON.parse(localStorage.getItem('listCountries') || '');
      let newArr = tempArr.filter((el: nameType) => {
        return el.name.common !== name;
      });
      localStorage.setItem('listCountries', JSON.stringify(newArr));
      state.listCountriesStore = newArr;
    },
    setFilterOn(state, action) {
      state.filterOn = action.payload;
    },
  },
});
export const {
  setAllCountries,
  setListCountriesStore,
  setCountryFilterLiked,
  setCountryFilterAll,
  setCountryClickLike,
  setFilterOn,
  setCountryClickDelete,
} = countriesSlice.actions;
export default countriesSlice.reducer;
