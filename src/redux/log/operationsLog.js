import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerThunk = createAsyncThunk(
  'log/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);

      axios.defaults.headers.common['Authorization'] = response.data.token;

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'log/logIn',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);

      console.log(response.data);

      axios.defaults.headers.common['Authorization'] = response.data.token;

      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentThunk = createAsyncThunk(
  'log/current',
  async (token, thunkAPI) => {
    try {
      axios.defaults.headers.common['Authorization'] = token;

      const response = await axios.get('/users/current');

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'log/logOut',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      axios.defaults.headers.common['Authorization'] = '';

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
