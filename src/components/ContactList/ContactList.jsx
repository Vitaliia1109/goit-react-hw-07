import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors.js";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
