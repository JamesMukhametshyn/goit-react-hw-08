import { useDispatch } from "react-redux";
<<<<<<< HEAD
=======
import { deleteContact } from "../../redux/contactsSlice";

import clsx from "clsx";
>>>>>>> parent of b782856 (add)
import css from "./Contact.module.css";
import { openModal, openPopUp } from "../../redux/contacts/slice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const popUpOpen = ({ id, name }) => {
    const userData = { id, name };
    const action = openPopUp(userData);
    dispatch(action);
=======

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
>>>>>>> parent of b782856 (add)
  };

  const modalOpen = ({ id, name, number }) => {
    const contactData = { id, name, number };
    const action = openModal(contactData);
    dispatch(action);
  };

  return (
    <div className={css.contactContainer}>
      <h1 className={css.name}>{name}</h1>

      <a href={`tel:${number}`} className={css.number}>
        📞{number}
      </a>

      <button
        type="button"
        onClick={() => {
          popUpOpen({ id, name });
        }}
        className={css.deleteButton}
      >
        Delete
      </button>
<<<<<<< HEAD
      <button
        type="button"
        onClick={() => {
          modalOpen({ id, name, number });
        }}
        className={css.editButton}
      >
        Edit
      </button>
=======
>>>>>>> parent of b782856 (add)
    </div>
  );
};

export default Contact;