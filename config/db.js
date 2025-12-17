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
    console.log("MongoDb connected");
}).on('error', (err)=>{
    console.log("MongoDb connection failed", err);
});

module.exports = connection;


// ```

// ### **Step 2: Set Up MongoDB Atlas (Free Cloud Database)**

// Since Railway can't connect to your local MongoDB, you need a cloud database:

// 1. **Go to MongoDB Atlas**: https://www.mongodb.com/cloud/atlas/register
// 2. **Create a free account** (if you don't have one)
// 3. **Create a free cluster** (M0 Sandbox - Free tier)
// 4. **Create a database user:**
//    - Username: `todouser`
//    - Password: (create a strong password, save it!)
// 5. **Whitelist all IPs:**
//    - Go to **"Network Access"**
//    - Click **"Add IP Address"**
//    - Click **"Allow Access from Anywhere"** (0.0.0.0/0)
// 6. **Get your connection string:**
//    - Go to **"Database"**
//    - Click **"Connect"**
//    - Choose **"Connect your application"**
//    - Copy the connection string, it looks like:
// ```


//    mongodb+srv://todouser:<password>@cluster0.xxxxx.mongodb.net/Todo_Proj?retryWrites=true&w=majority