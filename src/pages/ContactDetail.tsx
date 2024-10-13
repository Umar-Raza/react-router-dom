import { Params, useLoaderData } from "react-router-dom";
import { getContactById } from "../api/contactsApi";
import { Link } from "react-router-dom";
type LoaderArgs = {
  params: Params<string>;
};

export const contactDetailsLoader = async ({ params }: LoaderArgs) => {
  const { contactId } = params;
  if (!contactId) {
    throw new Error("ContactId not provided!");
  }
  const contact = await getContactById(contactId);
  if (!contact) {
    throw new Error("Contact not found!");
  }
  return {
    contact,
  };
};
const ContactDetail = () => {
  const { contact } = useLoaderData() as Awaited<
    ReturnType<typeof contactDetailsLoader>
  >;
  return (
    <div className="flex justify-center">
      <div className="card  text-slate-200 w-96">
        <div className="card-body items-center text-center">
          <img
            className="mask mask-squircle w-10 h-10"
            src={contact.picture.medium}
            alt="profilePic"
          />
          <h1>
            {contact?.name.first} {contact?.name.last}
          </h1>
          <p>{contact?.email}</p>

          <Link
            className="link link-hover text-xs text-neutral-content"
            to={"/contacts"}
          >
            Goto Contact page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
