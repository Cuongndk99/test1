
const path = require('path');

const express = require('express');

const mainRouter = require('./routes/index')

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(mainRouter);

app.listen(4000,(req,res)=>{
  console.log('server is running http://localhost:4000')
})