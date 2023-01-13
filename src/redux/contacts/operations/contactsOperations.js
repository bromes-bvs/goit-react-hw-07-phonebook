import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'components/service/mockAPI';

export const fetchOperation = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await mockAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postOperation = createAsyncThunk(
  'contacts/postContacts',
  async (nweContact, { rejectWithValue }) => {
    try {
      const contact = await mockAPI.postContact(nweContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOperation = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await mockAPI.deleteContact(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const simpleOperation = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     const contacts = await mockAPI.fetchContacts();
//     return contacts;
//   }
// );
