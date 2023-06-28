const express = require('express');
require('./db/config');

/*const mongoose = require('mongoose');
const connectDB = async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('product',productSchema);
    const data = await product.find();
    console.warn(data);
}
*/

/*app.get("/",(req,resp)=>{
    resp.send("app is working");
});
*/
//connectDB();  

const User = require('./db/User');
const app = express();

app.post();


app.listen(5000);