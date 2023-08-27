//title:String
//description:String
//image:String
//content:String
const {Schema, model} = require('../connection');
 

const myschema =new Schema({
    title : String,
    description : String,
    image : String,
    content : Number,
});

module.exports =model('blog' ,myschema);