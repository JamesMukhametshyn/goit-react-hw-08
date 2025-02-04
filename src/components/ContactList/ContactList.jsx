import { useSelector } from "react-redux";
<<<<<<< HEAD
import Contact from "../Contact/Contact.jsx";
=======
import { useMemo } from "react";

import Contact from "../Contact/Contact";

import clsx from "clsx";
>>>>>>> parent of b782856 (add)
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

const ContactList = () => {
<<<<<<< HEAD
  const filteredContacts = useSelector(selectFilteredContacts);

  // const filteredContacts = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.length > 0 &&
        filteredContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
=======
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const filteredContacts = useMemo(
    () =>
      selectContacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(selectNameFilter.toLowerCase());
      }),
    [selectNameFilter, selectContacts]
  );

  return (
    <ul className={clsx(css.contactsList)}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
>>>>>>> parent of b782856 (add)
        })}
    </ul>
  );
};

<<<<<<< HEAD
export default ContactList;
=======
export default ContactList;









>>>>>>> parent of b782856 (add)
