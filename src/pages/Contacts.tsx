import { getContacts } from "../api/contactsApi";
import { Link, useLoaderData } from "react-router-dom";

export const contactsLoader = async () => {
  const contacts = await getContacts();
  return {
    contacts,
  };
};

export const ContactsPage = () => {
  const { contacts } = useLoaderData() as Awaited<
    ReturnType<typeof contactsLoader>
  >;
  return (
    <div>
      <h1>Contact List:</h1>
      <ul>
        {contacts.map((contactItem) => {
          return (
            <li key={contactItem.login.uuid}>
              <Link
                to={`/contacts/${contactItem.login.uuid}${contactItem.name.last}`}
              >
                {contactItem.name.first}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
