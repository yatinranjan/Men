show dbs || show databases
use 'DatabaseName'

show collections
db.createCollection('CollectionName')
db.'Collection Name Old'.renameCollection('Collection Name New')
db.'Collection Name'.drop()

db.dropDatabase()

db.'Collection Name'.InsertOne({});
db.'Collection Name'.InsertMany([{}]);   // InsertMany([{}, {}, {}]); // 

db.'Collection Name'.find();
db.'Collection Name'.find({category: "New"})
db.'Collection Name'.find({},{title: 1, data: 1})

db.'Collection Name'.updateOne({}, {$set: {}});
db.'Collection Name'.updateMany({}, {$set: {}});
db.'Collection Name'.updateOne({}, {$set: {}});

db.'Collection Name'.deleteOne({});
db.'Collection Name'.deleteMany({});