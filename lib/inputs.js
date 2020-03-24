const readline = require('readline');

function askForPassword(key) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(`Enter Password of ${key}:`, (password) => {
      resolve(password);
      readlineInterface.close();
    });
  });
}

exports.askForPassword = askForPassword;
