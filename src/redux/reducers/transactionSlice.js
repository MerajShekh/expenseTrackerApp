import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import networkService from '../../networking/NetworkService';
import {store} from '../store';
import {show} from './loaderSlice';

export const getAllTransaction = createAsyncThunk(
  'allTransactions',
  async (params, thunkAPI) => {
    store.dispatch(show());
    const data = await networkService
      .get('/transaction', params)
      .then(data => data)
      .catch(error => {
        console.log('Err', error);
        return Promise.reject(error);
      });
    return data;
  },
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {data: {}},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTransaction.pending, state => {});
    builder.addCase(getAllTransaction.rejected, (state, action) => {
      console.log('Rejected...', action);
    });
    builder.addCase(getAllTransaction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default transactionSlice.reducer;
