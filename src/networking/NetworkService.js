import axios from 'axios';
import storage from '../redux/storage';

import {
  onRequestFulFill,
  onRequestReject,
  onResponseFulFill,
  onResponseReject,
} from './intercepters';

const networkService = axios.create({
  baseURL: 'http://192.168.0.186:8000/api',
  // baseURL: 'http://192.168.36.74:8000/api',
  headers: {'Content-Type': 'application/json'},
});

try {
  storage.getItem('token').then(value => {
    if (value) {
      networkService.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${value}`;
    }
  });
} catch (error) {
  console.log(error);
}

export const setAccessToken = token => {
  networkService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

networkService.interceptors.request.use(onRequestFulFill, onRequestReject);
networkService.interceptors.response.use(onResponseFulFill, onResponseReject);

export default networkService;
