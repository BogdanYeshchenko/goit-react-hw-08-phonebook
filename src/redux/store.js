import contactsReduser from './phoneBook/phoneBookSlice';
import logReduser from './log/logSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['token'],
};

const rootReduser = combineReducers({
  phoneBook: contactsReduser,
  log: persistReducer(persistConfig, logReduser),
});

export const store = configureStore({
  reducer: rootReduser,
  // devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
