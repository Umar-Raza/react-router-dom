import { CONTACTS } from "../data/contacts";
import { Link } from "react-router-dom";
export const ContactsPage = () => {
  return (
    <div>
      <h1>Contact List:</h1>
      <ul>
        {CONTACTS.map((contactItem) => {
          return (
            <li key={contactItem.id}>
              <Link to={`/contacts/${contactItem.id}`}>{contactItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
