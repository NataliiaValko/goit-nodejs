const crypto = require("crypto");

const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const getId = () => crypto.randomBytes(20).toString("hex");

const addContact = async (data) => {
  const contacts = await getAll();
  const id = getId();
  const newContact = { ...data, id };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
