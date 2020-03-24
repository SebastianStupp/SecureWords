const [command, key] = process.argv.slice(2);
const { get, set, unset } = require('./lib/commands');
const { ask } = require('./lib/inputs');

async function run() {
  if (command === 'get') {
    get(key);
  } else if (command === 'set') {
    const password = await ask(key);
    set(key, password);
  } else if (command === 'unset') {
    unset(key);
  }
}
run();
