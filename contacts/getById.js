const getAll = require("./getAll");
const handlerIncorrectId = require("./handlerIncorrectId");

const getById = async (id) => {
  const contacts = await getAll();
  const result = contacts.find((contact) => contact.id.toString() === id);
  if (!result) {
    return handlerIncorrectId();
  }

  return result;
};

module.exports = getById;
