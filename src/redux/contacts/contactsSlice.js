import { createSlice } from '@reduxjs/toolkit';
import {
  deleteOperation,
  fetchOperation,
  postOperation,
} from './operations/contactsOperations';

const initial = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initial,
  extraReducers: {
    [fetchOperation.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchOperation.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [postOperation.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [postOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [postOperation.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteOperation.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      state.isLoading = false;
    },
    [deleteOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteOperation.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
