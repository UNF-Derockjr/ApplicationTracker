const {MongoClient} = require('mongodb');

const url = "mongodb+srv://derrickkeithjr:ZEftIg5hGyPsjPwm@cluster0.fopao7u.mongodb.net/"
const client = new MongoClient(url);

const dbName = 'ApplicationTracker';


async function CreateNewApplication(data) {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('Users');
    client.close();
}

