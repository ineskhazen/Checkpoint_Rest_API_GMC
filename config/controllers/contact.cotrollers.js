exports.addContact=async(req,res)=>{try {
    // email=req.body.email
    const findContact=await Contact.findOne({email:req.body.email});
    if(findContact){
        return res.status(400).send({msg:"email should be unique"});
    }
    
        const newContact=new Contact(req.body);
        await newContact.save();
        res.status(200).send({msg:"Add contact succ",contact: newContact});  
    } catch (error) {
        res.status(400).send({msg:"can not save the contact", error});
    }
        
    };

exports.getAllContact =async(req,res)=>{
    try {const listContact=await Contact.find();
        res.status(200).send({msg:"api all the contact", contacts: listContact});
        
    } catch (error) {
        res.status(400).send({msg:"can not get contacts"});  
    }
    
};

exports.getContact =async(req, res)=>{
    try {
        const FindContact= await Contact.findById(req.params.id);
        res.status(200).send({msg:"get it success",contact: FindContact});
    } catch (error) {
        res.status(400).send({msg:"can not get it",error});
        
    }
};

exports.deleteContact=async(req,res)=> {
    try {
        await Contact.deleteOne({_id:req.params.id});
        res.status(200).send({msg:"delete it success"});
        
    } catch (error) { res.status(400).send({msg:"can not delete it"});
}
        
};

exports.updateContact=async(req,res)=>{
    try {
     const r= await Contact.updateOne({
         _id:req.params.id},
         {$set:{...req.body}}
     );   
     if (r.modifiedCount){
         return res.send({msg:"updated"});
     }
     res.send({msg:"there is no modification"});
    } catch (error) {
        res.send({msg:"can not modify it"});  
    }
};
