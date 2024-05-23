import { createSlice } from "@reduxjs/toolkit";

const countriesSlice= createSlice({

 name: 'countries',

 initialState:{
    allCountries:[],
    listCountriesStore:[]
 },
reducers:{
    setAllCountries(state, action){
        state.allCountries=action.payload
        localStorage.getItem('listCountries')===null?localStorage.setItem('listCountries', JSON.stringify(action.payload)):''        
    },
    setListCountriesStore(state, action){
        state.listCountriesStore=action.payload
        }   

}
})
export const {setAllCountries, setListCountriesStore}=countriesSlice.actions
export default countriesSlice.reducer
