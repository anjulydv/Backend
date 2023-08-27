const express = require('express');

const Model = require('../models/blogModel');


const router= express.Router( );

router.post('/addblog', ( req,res) =>{
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result) =>{
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/getbyid', ( req,res) =>{
    Model.find({  })
    .then((result) =>{
        res.json(result);
    })
    .catch((err) =>{
        res.status(500).json(err);
    });
});
router.get('/getall', ( req,res) =>{
    res.send('Response from user getall');


});


module.exports =router;


// addblog
// getbyid
// getall