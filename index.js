const { Command } = require("commander");
const chalk = require("chalk");

const getAll = require("./contacts/getAll");
const getById = require("./contacts/getById");
const addContact = require("./contacts/addContact");
const removeById = require("./contacts/removeById");
const updateById = require("./contacts/updateById");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const contacts = await getAll();
      console.table(contacts);
      return await getAll();

    case "getById":
      const contact = await getById(id);
      console.table(contact);
      return contact;

    case "addContact":
      const newContact = await addContact({ name, email, phone });
      console.table(newContact);
      return newContact;

    case "removeById":
      const removeContact = await removeById(id);
      console.table(removeContact);
      return removeContact;

    case "updateById":
      const updateContact = await updateById(id, name, email, phone);
      console.table(updateContact);
      return updateContact;

    default:
      console.log(chalk.red("Unknown action type!"));
  }
};

invokeAction(argv);
