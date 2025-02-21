const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const taskRoutes = require('./routes/task.routes')

const app= express();


app.use(cors());
app.use(express.json())

app.use('/tasks',taskRoutes);
const PORT = 3000 || process.env.PORT
app.listen(PORT, async ()=>{
    try {
        console.log(`[server]: running on the 3000`);
    connectDB();
    } catch (error) {
        console.log("error" ,error)
        
    }
    
})
