// const mongoose = require("mongoose");

// const connection = mongoose.createConnection('mongodb://localhost:27017/Todo_Proj').on('open', ()=>{
//     console.log("MongoDb connected");
// }).on('error', ()=>{
//     console.log("MongoDb connection failed");
// });


// module.exports = connection;


const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Todo_Proj';

const connection = mongoose.createConnection(mongoUri).on('open', ()=>{
    console.log("MongoDb connected to:", mongoUri.includes('mongodb+srv') ? 'Cloud Database' : 'Local Database');
}).on('error', (err)=>{
    console.log("MongoDb connection failed", err.message);
});

module.exports = connection;