const [command, key] = process.argv.slice(2);
const { get, set, unset } = require('./lib/commands');
const { askForPassword } = require('./lib/inputs');

async function run() {
  if (command === 'get') {
    get(key);
  } else if (command === 'set') {
    const password = await askForPassword(key);
    set(key, password);
  } else if (command === 'unset') {
    unset(key);
  }
}
run();
