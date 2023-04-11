import ConteinerCenter from 'components/conteiner/conteinerCenter';
import { ContactForm } from '../phonebook/ContactForm/ContactForm';
import { ContactList } from '../phonebook/ContactList/ContactList';
import { Filter } from '../phonebook/Filter/Filter';
import css from './phonebook.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneBook = () => {
  return (
    <div className={css.boockBox}>
      <ConteinerCenter>
        <h1 className={css.boockTitle}>Phonebook</h1>
      </ConteinerCenter>
      <ContactForm />

      <h2 className={css.boockTitle}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default PhoneBook;
