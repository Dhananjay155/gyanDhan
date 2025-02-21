const mongoose = require ('mongoose')

const TaskSchema = new mongoose.Schema({
    title : {type : String, required : true},
    desc : {type: String},
    priority : {type: String , enum:["Low","Medium", "High"], default:"Medium"},
    completed : {type:Boolean, default:false}
})

const Task = mongoose.model('task',TaskSchema);

module.exports = Task ; 