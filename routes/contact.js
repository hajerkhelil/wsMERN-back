
const  express= require('express')
const {Addcontact} = require ('../controllers/contact')
const contactSchema = require('../models/contact')
const contactRoute= express.Router()

//methode post
// req.body
//  /addcontact 
contactRoute.post("/addcontact", Addcontact)


// methode get 
//  url:/
contactRoute.get('/', getcontacts)


// methode get 
//  url: /:id
contactRoute.get('/:id',getOnecontact )

// delete req.params
// rul: /deletecontact/:id
contactRoute.delete('/deletecontact/:id', deletecontact )


// methode put
// req.params  req.body
// url: /updatecontact/:id
contactRoute.put('/updatecontact/:id', updatecontact )




module.exports= contactRoute;