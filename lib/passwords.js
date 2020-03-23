const fs = require('fs');

function getPasswords() {
  const passwordsJSON = fs.readFileSync('./db.json', 'utf8');
  const passwords = JSON.parse(passwordsJSON);
  return passwords;
}

function setPasswords(passwords) {
  fs.writeFileSync('./db.json', JSON.stringify(passwords));
}

exports.getPasswords = getPasswords;
exports.setPasswords = setPasswords;
