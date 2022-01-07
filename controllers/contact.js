
const contactSchema = require('../models/contact')



exports.Addcontact =   async  (req,res)=>{
    const {email}= req.body
        try {
           const newcontact = new contactSchema(req.body)
    
    // email must be unique 
           const found= await  contactSchema.findOne({email})
           if (found)
           {return   res.status(400).send('contact already exists')}
    
           await  newcontact.save()
           res.status(200).send({msg:"contact added", newcontact})
        } catch (error) {
            res.status(500).send("could not add contact")
        }
    
    }


    exports.getcontacts=async (req,res)=>{

        try {
            const contacts= await contactSchema.find()
            res.status(200).send({msg:"list of contacts", contacts})
    
        } catch (error) {
            res.status(500).send("could not get contacts")
    
        }
    }


exports.getOnecontact = async (req,res)=>{
    const {id}=req.params
    try {
        const  foundcontact = await  contactSchema.findById(id)
        res.status(200).send({msg:"contact found", foundcontact})
    } catch (error) {
        res.status(500).send("could not get contact")
    }
}

exports.deletecontact = async (req,res)=>{
    const {id}= req.params
    try {
        const  deleted= await  contactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:"contact deleted" , deleted})
    } catch (error) {
        res.status(500).send("could not delete contact")

    }
}

exports.updatecontact = async  (req,res)=>{
    const {id}= req.params
    try {
        const updated= await contactSchema.findByIdAndUpdate(id, {$set: {...req.body}})
        res.status(200).send({msg:"contact updated" , updated})
    } catch (error) {
        res.status(500).send("could not update contact")
    }
}