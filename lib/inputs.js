/* eslint-disable no-undef */
const readline = require('readline');

function askQuestion(question) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(` ${question}:`, (password) => {
      resolve(password);
      readlineInterface.close();
    });
  });
}

function askAdminAccess() {
  const questionAdminAccess = 'Bitte Password für AdminAcess eingeben';
  return questionAdminAccess;
}

function askNewPassword(key) {
  const questionNewPassword = `Bitte neues Password für User ${key}`;
  return questionNewPassword;
}

exports.askNewPassword = askNewPassword;
exports.askAdminAccess = askAdminAccess;
exports.askQuestion = askQuestion;
