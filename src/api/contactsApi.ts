import { Contact } from "../typs";

const apiUrl = "https://api.randomuser.me";
const apiSeed = "codewitumar";
const resultsCount = 10;

export const getContacts = async () => {
  const Url = `${apiUrl}?seed=${apiSeed}&results=${resultsCount}`;
  const resp = await fetch(Url);
  const jsonResp = await resp.json();
  return jsonResp.results as Contact[];
};

export const getContactById = async (uuid: string) => {
  const contacts = await getContacts();
  return contacts.find((contactItem) => {
    return contactItem.login.uuid == uuid;
  });
};
