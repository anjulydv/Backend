const { Schema, model} = require('../connection');

const mySchema = new Schema({
    title : String,
    description : String,
    price : Number,
    image: String,

    
});

module.exports = model('product'.mySchema);