import axios from 'axios';

axios.defaults.baseURL = 'https://63bfd1b1a177ed68abb8b441.mockapi.io';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  // console.log(response);
  return response.data;
}

export async function deleteContact(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  // console.log(response);
  return response.data.id;
}

export async function postContact(contact) {
  const response = await axios.post(`/contacts`, contact);
  // console.log(response);
  return response.data;
}
