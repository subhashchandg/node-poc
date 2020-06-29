const express = require('express');
const bodyParser = require('body-parser');
const api = require('../router/api/api-router')
const jwtUtil = require('../common/auth/auth-util');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
   
  // log all requests to access.log
app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))
  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api',api)

app.post('/authenticate',(req,res)=>{
var token = jwtUtil.signJWT(req.body);
res.json({jwt:token})
})

app.listen(3000,()=>{
    console.log('server has been started on port 3000');
});