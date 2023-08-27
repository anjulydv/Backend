const express = require('express');///type req
const multer = require('multer');

const router = express.Router();


const storage = multer.diskStorage({ 
    destination: (req, file ,cb) =>{ //re=request
        cb(null,'./uploads' );
    }, 
     //cb=callback

    filename:(req, file ,cb ) =>{
        cb(null, file.originalname);
     }
 });

 const uploader =multer({storage: storage});

 router.post('/uploadfile',uploader.single('myfile') ,(req , res) =>{
    res.json({message : 'file upload success'});

 });

 module.exports = router;


