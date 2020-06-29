const express = require('express');
const api = express.Router();
const jwtUtil = require('../../common/auth/auth-util');
const requestWeb = require('../../common/util/request-web-util');

api.post('/writeUserDetailsToFile',jwtUtil.validateJWTToken,(req,res)=>{

    if(jwtUtil.verifyJWTToken){
        requestWeb('get','https://jsonplaceholder.typicode.com/users')
        .then(function (response) {  
             requestWeb('post','http://localhost:5000/api/updateUserDetails',req.token,response.data)
             .then((resp)=>{
                res.status(200).send(resp.data)
             })            
        })
        .catch(function (error) {  
            res.status(500).send('There is some problem at the server end')
        })
        .finally(function () {
            console.log("web Request completed");
        });     
    }
    else{
        res.sendStatus(403)
    }
    })
   
   
    module.exports = api;