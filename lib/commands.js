const { getPasswords, setPasswords } = require('./passwords');
const { encrypt, decrypt } = require('./crypto');

function get(key) {
  try {
    const passwords = getPasswords();
    console.log(key, decrypt(passwords.passwords[key]));
  } catch (err) {
    console.error(err);
  }
}

function set(key, value) {
  const passwords = getPasswords();
  const encryptPassword = encrypt(value);
  passwords.passwords[key] = encryptPassword;
  try {
    setPasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

function unset(key) {
  const passwords = getPasswords();
  delete passwords[key];
  console.log(passwords[key]);
  try {
    setPasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

exports.set = set;
exports.get = get;
exports.unset = unset;
