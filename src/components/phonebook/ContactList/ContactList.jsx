import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact, fetchContacts } from 'redux/phoneBook/operations';
import { BeatLoader } from 'react-spinners';
import ConteinerCenter from 'components/conteiner/conteinerCenter';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const isLoading = useSelector(state => state.phoneBook.contacts.isLoading);
  const filter = useSelector(state => state.phoneBook.filter);
  const refresh = useSelector(state => state.log.refresh);
  const isLogIn = useSelector(state => state.log.isLogIn);

  useEffect(() => {
    if (refresh || isLogIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, refresh, isLogIn]);

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
    <ConteinerCenter>
      <BeatLoader />
    </ConteinerCenter>
  ) : (
    <ul className={css.contactList}>
      {filteredContscts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id} className={css.contact}>
            {name}: {number}{' '}
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
