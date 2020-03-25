const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  return client;
}

function closeDB() {
  return client.close;
}

function getCollections(collectionName, dbName) {
  return client.db(dbName).collection(collectionName);
}

exports.getCollections = getCollections;
exports.connectDB = connectDB;
exports.closeDB = closeDB;
