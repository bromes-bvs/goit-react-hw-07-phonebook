import { createSlice } from '@reduxjs/toolkit';
import initial from '../../data.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { content: initial },
  reducers: {
    updateContacts(state, action) {
      state.content.push(action.payload);
    },
    deleteContacts(state, action) {
      state.content = state.content.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { updateContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
