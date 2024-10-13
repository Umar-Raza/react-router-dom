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
      <table className="table">
        {/* <h1>Contacts List:</h1> */}
        <thead>
          <tr className="text-slate-200">
            <th>#</th>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactItem, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td><img className="mask mask-squircle w-10 h-10" src={contactItem.picture.medium} alt="profilePic" /></td>
                <td>{contactItem.name.first}</td>
                <td>{contactItem.name.last}</td>
                <td>{contactItem.email}</td>
                <td>
                  <button className="btn btn-sm flex justify-center text-slate-300">
                    <Link to={`/contacts/${contactItem.login.uuid}`}>
                      Details
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
