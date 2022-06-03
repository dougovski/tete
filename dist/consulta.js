const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://dswa5:dswa5@cluster0-shard-00-00.aoz22.mongodb.net:27017,cluster0-shard-00-01.aoz22.mongodb.net:27017,cluster0-shard-00-02.aoz22.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-12vniy-shard-0&authSource=admin&retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'ifsp';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Aluno: Vinicius Rodrigues Duarte');
  const db = client.db(dbName);
  const collection1 = db.collection('contatos');
  const collection2 = db.collection('cursos');
  const findResult1 = await collection1.find({}).toArray();
  console.log('Found documents =>', findResult1);
  // the following code examples can be pasted here...
  const findResult2 = await collection2.find({}).toArray();
  console.log('Found documents =>', findResult2);
    return 'fim.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());