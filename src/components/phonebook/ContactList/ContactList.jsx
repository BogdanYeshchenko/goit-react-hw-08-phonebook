import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact, fetchContacts } from 'redux/operations/operations';
import { BeatLoader } from 'react-spinners';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const isLoading = useSelector(state => state.phoneBook.contacts.isLoading);
  const filter = useSelector(state => state.phoneBook.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContscts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  function hendleDeleteContact(id, name) {
    const notify = () =>
      toast.warn(`${name} was delete.`, {
        theme: 'dark',
      });
    notify();
    dispatch(deleteContact(id));
  }

  return isLoading ? (
    <BeatLoader />
  ) : (
    <ul className={css.contactList}>
      {filteredContscts.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li key={id} className={css.contact}>
            {name}: {phone}{' '}
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => hendleDeleteContact(id, name)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
