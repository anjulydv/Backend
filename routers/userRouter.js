const express = require('express');

const Model = require('../models/userModel');
// type req and then enter

const router = express.Router();

router.post('/add', (req, res) => {
   console.log(req.body);

   

   new Model( req.body).save( )
   .then((result) =>{
      res.json(result);
   })
   .catch((err) => {
      console.log(err);
      res.status(500).json(err);
   });//ya tyo then chlega ya toh catch in then catch


});
router.get('/getall', (req, res) => {
   Model.find({  })
   .then((result) =>{
      res.json(result);
   })
   .catch((err) => {
      res.status(500).json(err);
   });
   

});
//denotes url

router.get('/getbyemail/:email' , (req,res)=>{
   console.log(req.params.email);
   


  // find function matches and returns all the data
  //2. findOne function matches and returns only first data
   Model.findOne( { email :req.params.email })//type thenc for shortcut
   .then((result) => {
      res.json(result);
      
   }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
      
   });

})
router.get('/getbyid/:id', (req, res) => {

  // Model.findOne({_id : req.params.id})
  Model.findById(req.params.id)

   .then((result) =>{
      res.json(result);
   })
   .catch((err) =>{
      console.log(err);
      res.status(500).json(err);
   });

});
router.delete('/delete/:id', (req, res) => {


   Model.findByIdAndDelete(req.params.id)
   .then((result) => {
      res.json(result);
      
   })
   .catch((err) => {
      console.log(err);
      res.status(500).json(err);
      
   });

   }
   
);
router.put('/update/:id', (req, res) => {
   Model.findByIdAndUpdate(req.params.id, req.body ,{new: true})
   .then((result) => {
      res.json(result);
      
   }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
      
   });
   

});
router.post('/authenticate', (req, res) => {
   console.log(req.body);
   Model.findOne(req.body)
   .then((result) => {
       if(result !== null) res.json(result);
       else res.status(401).json({message : 'login failed'})
   })
   .catch((err) => {
       console.log(err);
       res.status(500).json(err);
   });
});

module.exports = router;

//getall
//getbyid
//delete
//update




module.exports = router; //i for importing in index.js

