
// import express
const express = require("express");
//importing routers
const userRouter =require( './routers/userRouter');
const blogRouter =require( './routers/blogRouter');


// initialize express app
const app = express();
const port = 5000;

//middleware-modify the request and forward the message 

app.use(express.json ());
app.use('/user', userRouter );
app.use('/blog', blogRouter );

//routes

app.get( '/', (req, res) => {
    res.send('Response from express');
} );
app.get( '/add', (req, res) => {
    res.send('Response from add');
} );
app.get( '/getall', (req, res) => {
    res.send('Response from getall');
} );
app.get( '/delete', (req, res) => {
    res.send('Response from delete');
} );


app.listen (port,() =>{ console.log ('express server started at 5000') }  );
