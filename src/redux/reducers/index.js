import authReducer from './authSlice';
import loaderReducer from './loaderSlice';
import categoryReducer from './categorySlice';
import transactionReducer from './transactionSlice';

export default rootReducer = {
  auth: authReducer,
  loader: loaderReducer,
  category: categoryReducer,
  transaction: transactionReducer,
};
