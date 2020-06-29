const express = require('express');
const bodyParser = require('body-parser');
const api = require('../router/remote-api/remote-api-router')
const jwtUtil = require('../common/auth/auth-util');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api',api)

app.post('/authenticate',(req,res)=>{
var token = jwtUtil.signJWT(req.body);
res.json({jwt:token})
})

app.listen(5000,()=>{
    console.log('server has been started on port 5000');
});