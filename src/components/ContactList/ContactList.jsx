import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table } from './ContactList.styled';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Table>
      <tbody>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} item={contact} />
        ))}
      </tbody>
    </Table>
  );
};
