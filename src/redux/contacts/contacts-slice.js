import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const fetchRequest = state => {
  state.isLoading = true;
};
const fetchWithError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchAllContactsRequest: fetchRequest,
    fetchAllContactsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    fetchAllContactsError: fetchWithError,

    deleteContactRequest: fetchRequest,
    deleteContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== payload.id);
    },
    deleteContactError: fetchWithError,

    addContactRequest: fetchRequest,
    addContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    addContactError: fetchWithError,
  },
});

export const {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
} = contactsSlice.actions;
