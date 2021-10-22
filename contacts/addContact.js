const crypto = require("crypto");

const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const id = crypto.randomBytes(20).toString("hex");

const addContact = async (data) => {
  const contacts = await getAll();
  const newContact = { ...data, id };
  contacts.push(newContact);
  await updateContacts(contacts);
  console.table(await getAll());
  return newContact;
};

module.exports = addContact;
