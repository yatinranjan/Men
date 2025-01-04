const mongoose = require('mongoose');

const connection=mongoose.connect('mongodb://0.0.0.0/men').then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
});

module.exports = connection;