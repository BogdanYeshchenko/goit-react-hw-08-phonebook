import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6432afd83e05ff8b372b72e3.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'phoneBook/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contats');

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'phoneBook/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contats', data);

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phoneBook/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contats/${id}`);

      return response.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".
