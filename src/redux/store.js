import contactsReduser from './phoneBook/phoneBookSlice';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');

const rootReduser = combineReducers({ phoneBook: contactsReduser });

export const store = configureStore({
  reducer: rootReduser,
});
