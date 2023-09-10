import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import networkService from '../../networking/NetworkService';
import {store} from '../store';
import {show} from './loaderSlice';

export const getAllCategory = createAsyncThunk('allCategories', async () => {
  store.dispatch(show());
  const data = await networkService
    .get('/categories')
    .then(data => data)
    .catch(error => {
      console.log('Err', error);
      return Promise.reject(error);
    });

  return data;
});

export const categorySlice = createSlice({
  name: 'category',
  initialState: {data: {}},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCategory.pending, state => {});
    builder.addCase(getAllCategory.rejected, (state, action) => {
      console.log('Rejected...', action);
    });

    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      //   console.log('Data', action.payload);
      state.data = action.payload;
    });
  },
});

// export const {} = categorySlice.actions
export default categorySlice.reducer;
