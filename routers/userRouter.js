const express = require('express');
 // type req and then enter

 const router = express.Router( );

 router.get('/add ',( req, res) => {
    res.send( 'Response from user add');
 
 });
 router.get('/getall ',( req, res) => {
    res.send( 'Response from user getall');
 
 });
 router.get('/getbyid ',( req, res) => {
    res.send( 'Response from user getbyid');
 
 });
 router.get('/delete ',( req, res) => {
    res.send( 'Response from user delete');
 
 });
 router.get('/update',( req, res) => {
    res.send( 'Response from user update');
 
 });
 module.exports = router;

 //getall
 //getbyid
 //delete
 //update




 module.exports = router; //i for importing in index.js

