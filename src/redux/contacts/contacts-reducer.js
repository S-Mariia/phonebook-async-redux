import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

const initialState = [];

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export default contactsReducer;
