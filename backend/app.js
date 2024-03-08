const express = require('express');
const app = express();
const errormiddleWare= require('./middlewares/error')
const cookieParser=require('cookie-parser')

const products=require('./routes/product')
const auth = require('./routes/auth')
const order= require('./routes/order')

app.use(express.json(auth));
app.use(cookieParser());

app.use('/api/v1/',products);
app.use('/api/v1/',auth)
app.use('/api/v1/',order)


app.use(errormiddleWare)


module.exports =app;