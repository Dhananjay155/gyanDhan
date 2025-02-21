    const mongoose = require('mongoose')

    async function connectDB (){
        try{
            await mongoose.connect(process.env.MONGODB_URL);
            console.log(`[server]: MongoDB is Connected `);
            
        }catch(err){
            console.log(`[server]: MongoDB connection is failed`,err);
            
        }
    }

    module.exports = connectDB;