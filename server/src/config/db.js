    const mongoose = require('mongoose')

    async function connectDB (){
        try{
            await mongoose.connect('mongodb+srv://yoga-guru:yoga-guru@yoga-guru.7ygw9.mongodb.net/?retryWrites=true&w=majority&appName=yoga-guru');
            console.log(`[server]: MongoDB is Connected `);
            
        }catch(err){
            console.log(`[server]: MongoDB connection is failed`,err);
            
        }
    }

    module.exports = connectDB;