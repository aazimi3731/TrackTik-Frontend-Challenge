// axios setup
import axios from 'axios';

const baseURL = 'https://tracktik-challenge.staffr.com';

/* eslint-disable import/prefer-default-export */
export const http = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
