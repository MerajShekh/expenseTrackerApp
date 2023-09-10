import {Alert, View} from 'react-native';
import {logOut} from '../redux/reducers/authSlice';
import {show, hide} from '../redux/reducers/loaderSlice';
import {store} from '../redux/store';

export const onRequestFulFill = request => {
  console.log('intercepterReq:', request);
  return request;
};

export const onRequestReject = error => {
  console.log('intercepterReqError:', error);
  return Promise.reject(error);
};

export const onResponseFulFill = response => {
  console.log('intercepterRes:', response);
  store.dispatch(hide());
  return response.data;
};

export const onResponseReject = error => {
  const {data, status} = error.response;
  store.dispatch(hide());
  switch (status) {
    case 400:
      // console.log(`intercepterResError-${status}:`, data);
      Alert.alert('Alert', data);
      return Promise.reject({message: data, status});
      break;
    case 401:
      console.log('Error:', error);
    // return store.dispatch(logOut());
    default:
      // console.log(`intercepterResError-${status}:`, data);
      return Promise.reject(error);
      break;
  }
};
