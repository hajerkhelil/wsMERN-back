
const mongoose= require('mongoose')

const  contactSchema= new mongoose.Schema({
    name: {type: String, require: true},
    age: Number,
    email: {type:String, unique:true, require:true }
})
