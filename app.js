// eslint-disable-next-line no-undef
const [command, key] = process.argv.slice(2);
const { get, set, unset } = require('./lib/commands');
const { askQuestion, askAdminAccess, askNewPassword } = require('./lib/inputs');
const { readMasterPassword } = require('./lib/passwords');

async function run() {
  const masterPassword = await askQuestion(askAdminAccess());

  if (masterPassword === readMasterPassword()) {
    if (command === 'get') {
      get(key);
    } else if (command === 'set') {
      const password = await askQuestion(askNewPassword(key));
      set(key, password);
    } else if (command === 'unset') {
      unset(key);
    }
  } else {
    console.log('Password Ungültig');
  }
}
run();
