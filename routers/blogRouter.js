const express = require('express');

const router= express.Router( );

router.get('/addblog', ( req,res) =>{
    res.send( 'Response from user addblog')
});
router.get('/getbyid', ( req,res) =>{
    res.send( 'Response from user addblog')
});
router.get('/getall', ( req,res) =>{
    res.send( 'Response from user addblog')
});


module.exports =router;


// addblog
// getbyid
// getall