const mongodb = require('mongodb');
const getDb = require('../utilities/db').getDb;
const path = require('path');



module.exports = class Data{
    constructor(name, position, office, age, date, salary, id){
        this.name = name;
        this.position = position;
        this.office = office;
        this.age = age;
        this.date = date;
        this.salary = salary;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    save() {
       const db = getDb();
       let dbOperation;

       if(this._id){
        dbOperation = db.collection('dataSet').updateOne({_id: this._id}, {$set: this}); 
    }else {
        dbOperation = db.collection('dataSet').insertOne(this);   
    }

    return dbOperation.then(result => {
        console.log("success");
    })
    .catch(error=>{
        console.log("failed");
    });

    }

    static fetchAll(){  

        const db = getDb();

        return db.collection('dataSet').find().toArray()
        .then(dataset => {
            return dataset;
        })
        .catch(error =>{
            console.log("Failed to fetch all the products");
        });
    }

    static findById(dataId){
        const db = getDb();
        return db.collection('products').find({_id: new mongodb.ObjectId(dataId)}).next()
        .then(data => {
            return data;
        })
        .catch(error =>{
            console.log('failed to fetch the product details');
        });
    }
}