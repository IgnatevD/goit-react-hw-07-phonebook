/** @format */

import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/contacts/contacts-actions";

const ContactList = () => {
  const contacts = useSelector((state) => {
    const normalFilter = state.filters.toLowerCase();
    const visibleContacns = state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalFilter)
    );
    return visibleContacns;
  });
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(allActions.deleteContact(id));

  return (
    <ul className={s.contactList}>
      {contacts?.map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <p className={s.listName}>{name}</p>
          <p className={s.listNumber}>{number}</p>
          <button
            className={s.contactDelete}
            type="button"
            onClick={() => deleteContact(id)}
          >
            удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
