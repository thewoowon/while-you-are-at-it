import axios from 'axios';
import {Platform} from 'react-native';
import {API_PREFIX} from '../constants';

const BASE_URL = Platform.select({
  ios: 'http://127.0.0.1:8000', // iOS 시뮬레이터
  android: 'http://127.0.0.1:8000', // Android 에뮬레이터
});

const basicUrl = `${BASE_URL}${API_PREFIX}`;

const customAxios = axios.create({
  baseURL: basicUrl,
  timeout: 10000, // 10초 제한
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios;
