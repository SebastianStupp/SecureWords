const { getPasswords, setPasswords } = require('./passwords');

function get(key) {
  try {
    const passwords = getPasswords();
    console.log(passwords[key]);
  } catch (err) {
    console.error(err);
  }
}

function set(key, value) {
  const passwords = getPasswords();
  passwords[key] = value;
  console.log(passwords[key]);
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
