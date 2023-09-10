import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import networkService, {setAccessToken} from '../../networking/NetworkService';
import storage from '../storage';
import {show} from './loaderSlice';
import {store} from '../store';
const initialState = {
  isLoggedIn: false,
  user: {},
};

export const login = createAsyncThunk(
  'loginUser',
  async ({email, password}) => {
    store.dispatch(show());
    const response = await networkService
      .post('/signin', {email, password})
      .then(data => data)
      .catch(error => {
        return Promise.reject(error);
      });

    return response;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {});
    builder.addCase(login.rejected, (state, action) => {});
    builder.addCase(login.fulfilled, (state, action) => {
      try {
        storage.setItem('token', action.payload.token),
          setAccessToken(action.payload.token),
          (state.isLoggedIn = true),
          (state.user = action.payload);
      } catch (error) {
        console.log('authErr:', error);
      }
    });
  },
});

export const {logOut} = authSlice.actions;
export default authSlice.reducer;
