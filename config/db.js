const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb://localhost:27017/Todo_Proj').on('open', ()=>{
    console.log("MongoDb connected");
}).on('error', ()=>{
    console.log("MongoDb connection failed");
});


module.exports = connection;