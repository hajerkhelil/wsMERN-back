
const  express = require ('express')
const connectDB = require('./config/connectDB')
const contactRoute = require('./routes/contact')
require("dotenv").config()
const app= express()


connectDB()

app.use(express.json())
app.use('/api/contacts', contactRoute)


app.listen(process.env.port, ()=> console.log(` port is running on port ${process.env.port}`))