const express = require('express');
const dotenv = require('dotenv');
const path= require('path');
const app = express();
dotenv.config({path: path.join(__dirname, 'config', 'config.env')});
const connectDatabase =require('./config/connectDataBase')

const products= require('./routes/product');
const orders= require('./routes/order');

connectDatabase();
app.use(express.json())
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.listen(process.env.PORT,() =>{
    console.log(`server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});