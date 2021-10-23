const getAll = require("./getAll");
const updateContacts = require("./updateContacts");
const handlerIncorrectId = require("./handlerIncorrectId");

const removeById = async (id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((contact) => contact.id.toString() === id);
  if (index === -1) {
    return handlerIncorrectId();
  }
  const removeContact = contacts.splice(index, 1);
  await updateContacts(contacts);
  return removeContact;
};

module.exports = removeById;
