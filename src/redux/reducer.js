import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
import { authSlice } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
});
