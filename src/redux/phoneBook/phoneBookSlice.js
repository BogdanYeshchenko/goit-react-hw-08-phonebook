import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/operations/operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    chengeFilter(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },

    [fetchContacts.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.items = [...state.contacts.items, payload];
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts.items = state.contacts.items.filter(
        el => el.id !== payload.id
      );
    },

    [fetchContacts.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
});

export const { chengeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
