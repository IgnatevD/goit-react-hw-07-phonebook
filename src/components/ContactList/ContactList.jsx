/** @format */

import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  contactsFetch,
  contactsFetchDelete,
} from "../../redux/contacts/contacts-operation";
import { useEffect } from "react";
import allSelectors from "../../redux/contacts/contacts-selectors";

const ContactList = () => {
  const contacts = useSelector((state) => {
    return allSelectors.visibleContacnsList(state);
  });

  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(contactsFetchDelete(id));

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  return (
    <ul className={s.contactList}>
      {contacts?.length > 0 &&
        contacts?.map(({ id, name, number }) => (
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
