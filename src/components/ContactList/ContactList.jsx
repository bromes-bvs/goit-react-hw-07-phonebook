import ContactItem from './ContactItem';
import StyledList from './ContactList.styled';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <StyledList>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={phone}
            deleteContact={event => onDeleteContact(id, event)}
          />
        );
      })}
    </StyledList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
