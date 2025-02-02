import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    userCountry: '',
  },
  reducers: {
    setCountries: (state, action) => {
      console.log("counties");
      
      state.countries = action.payload;
    },
    setUserCountry: (state, action) => {
      state.userCountry = action.payload;
    },
  },
});

export const { setCountries, setUserCountry } = countrySlice.actions;
export default countrySlice.reducer;
