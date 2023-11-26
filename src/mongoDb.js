var MongoClient = require('mongodb').MongoClient;
console.log("Mongodb require successful");

let url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db('ScreenplayDB');
    return db.collection('Profiles');
}

module.exports = dbConnect;