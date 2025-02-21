const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const taskRoutes = require('./routes/task.routes')

const app= express();


app.use(cors());
app.use(express.json())

app.use('/tasks',taskRoutes);

app.listen(5000, async ()=>{
    try {
        console.log(`[server]: running on the 5000`);
    connectDB();
    } catch (error) {
        console.log("error" ,error)
        
    }
    
})
