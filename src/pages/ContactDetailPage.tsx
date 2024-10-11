import { useLoaderData } from "react-router-dom";
import { getContactById } from "../api/contactsApi";

type LoaderArgs = {
  params: {
    contactId: string;
  };
};

export const contactDetailsLoader = async ({ params }: LoaderArgs) => {
  const contact = await getContactById(params.contactId);
  return {
    contact,
  };
};

export const ContactDetailPage = () => {
  const { contact } = useLoaderData() as Awaited<
    ReturnType<typeof contactDetailsLoader>
  >;
  return (
    <>
      <h1>
        {contact?.name.first} {contact?.name.last}
      </h1>
      <p>{contact?.email}</p>
    </>
  );
};
