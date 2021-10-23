const chalk = require("chalk");

const handlerIncorrectId = () => {
  console.log(
    chalk.red(
      "You entered incorrectly ID. Please check your ID and repeat the request!"
    )
  );
  return null;
};

module.exports = handlerIncorrectId;
