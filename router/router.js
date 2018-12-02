const express =  require('express');
const router = express.Router();
const User = require('../model/user.model');

// SignUP Page Route

const errorhandling = (res) => {
    res.send({"message":"Please send the JSON in correct format",
    "status": "error"});
};



router.post('/signUp', (req,res,next) => {
         console.log(req.body);
         User.create(req.body).then((dbresp)=>{
            res.send({"message":"user is registered",
            "status": "true",
           "user": dbresp});
         }).catch(next);
});


// signIn Page Route
router.post('/signIn', (req,res,next) => {
    
    
    console.log('req',req.body);
     if(req.body)
     {
        User.findOne({emailId: req.body.emailId}, (err,dbres)=>{
            console.log(dbres.password);
            if(dbres.password === req.body.password)
            {
               res.send({"message":"user is valid",
               "status": "true",dbresp: dbres});
            }
            else {
                res.status(401).send({status:"failure",message:"password does not match"});
            }
   
            
        }).catch(next);
       }
       else 
       {
        res.status(400).send({"mesage":"Bad request"})

       }
     
    
});


module.exports =  router;