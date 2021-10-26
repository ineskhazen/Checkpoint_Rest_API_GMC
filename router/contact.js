const express=require("express");
const { addContact, getAllContact, getContact, deleteContact, updateContact } = require("../config/controllers/contact.cotrollers");
const router=express.Router();

const Contact= require ("../models/Contact");


router.get("/test",(req,resp)=>{
    resp.send("test api");
})
module.exports=router;

// CRUD
//@create => add a contact to the database
// Method => Post
//Data req.body
//URL http://localhost:5000/api/contact/

router.post("/",addContact);
//try {
    //console.log(req.body);
    //step yasna3 fi contact jdid
    //const newContact=new Contact(req.body);
    // base de donnée(save async method +promisses)
    // await newContact.save();
    // res.status(200).send({msg:"POST API TEST",newContact});
// } catch (error) {
    // res.status(400).send({msg:"can not save the contact", error});
    
// }


//@read => Get all the contact
// Method => GET
//Data
//URL http://localhost:5000/api/contact/

router.get("/",getAllContact);

//@read => Get one contact By id
// Method => GET
//Data id=>req.params
//URL http://localhost:5000/api/contact/:id

router.get('/:id',getContact);

//@DELETE=> delete one contact By id
// Method => DELETE
//Data id=>req.params
//URL http://localhost:5000/api/contact/:id

router.delete("/:id",deleteContact);


//@UPDATE=> update one contact By id
// Method => PUT 
//Data id=>req.params+ body=>modification
//URL http://localhost:5000/api/contact/:id

router.put("/:id",updateContact);
    
    module.exports=router;