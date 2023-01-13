import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Wrapper from './Wrapper/Wrapper.styled';
import { MainHeading, SecondaryHeading } from './Heading/Heading.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filterSlice';
import {
  deleteOperation,
  fetchOperation,
  postOperation,
} from 'redux/contacts/operations/contactsOperations';
import { useEffect } from 'react';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  // console.log(useSelector(state => state));
  // console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOperation());
  }, [dispatch]);

  const handelSubmit = e => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    const findeName = contacts.some(contact =>
      contact.name.toLowerCase().includes(newName.toLowerCase())
    );
    const findeNumber = contacts.some(contact =>
      contact.phone.trim().includes(newNumber.trim())
    );

    const newContact = {
      name: newName,
      phone: newNumber,
    };
    if (!findeName && !findeNumber) {
      dispatch(postOperation(newContact));
      e.target.reset();
    } else {
      alert(`${newName} is already in contacts`);
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    dispatch(updateFilter(value));
  };

  const daleteContact = (contactId, event) => {
    event.target.disabled = 'true';

    dispatch(deleteOperation(contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      <MainHeading>Phonebook</MainHeading>
      <ContactForm onSubmiting={handelSubmit} />
      <SecondaryHeading>Contacts</SecondaryHeading>
      <Filter value={filter} onChange={handleChange} />
      {visibleContacts.length !== 0 && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={daleteContact}
        />
      )}
    </Wrapper>
  );
}
