import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Wrapper from './Wrapper/Wrapper.styled';
import { MainHeading, SecondaryHeading } from './Heading/Heading.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, updateContacts } from 'redux/contacts/contactsSlice';
import { updateFilter } from 'redux/filter/filterSlice';

export function App() {
  const contacts = useSelector(state => state.contacts.content);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handelSubmit = e => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    const findeName = contacts.some(contact =>
      contact.name.toLowerCase().includes(newName.toLowerCase())
    );
    const findeNumber = contacts.some(contact =>
      contact.number.trim().includes(newNumber.trim())
    );

    const newContact = {
      id: nanoid(),
      name: newName,
      number: newNumber,
    };
    if (!findeName && !findeNumber) {
      dispatch(updateContacts(newContact));
      e.target.reset();
    } else {
      alert(`${newName} is already in contacts`);
    }
  };

  const handleChange = e => {
    const value = e.target.value;

    dispatch(updateFilter(value));
  };

  const daleteContact = contactId => {
    dispatch(deleteContacts(contactId));
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
