const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; // _ kriipsuga märgitakse muutujaid, mida kasutatakse vaid selle klassi sees

const mongoConnect = (cb) =>{ //mongoconnect avab ühenduse
    MongoClient.connect('mongodb://localhost:27017/dataDB', {useUnifiedTopology: true})
    .then (client => {
        console.log('connected');
        _db = client.db();
        cb();
    })
    .catch(error => {
        throw error;
    });
}

const getDb = () =>{
    if(_db){
        return _db; //return the connection
    }
    throw "No db found";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb; 