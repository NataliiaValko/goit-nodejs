const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const updateById = async (id, name, email, phone) => {
  const contacts = await getAll();
  const index = contacts.findIndex((contact) => contact.id.toString() === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { name, email, phone, id };
  await updateContacts(contacts);
  console.table(await getAll());
  return contacts[index];
};

module.exports = updateById;
