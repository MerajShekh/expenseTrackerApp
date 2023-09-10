import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    show: state => {
      state.isLoading = true;
    },
    hide: state => {
      state.isLoading = false;
    },
  },
});

export const {show, hide} = loaderSlice.actions;
export default loaderSlice.reducer;
