const jwt = require('jsonwebtoken');

function signJWT(userDetails){
    return jwt.sign(userDetails, 'mysecretKey');
}
function verifyJWTToken (req,res){
    jwt.verify(req.token,'mysecretKey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }
        else{
            return true;
        }
    })
}

function validateJWTToken (req,res,next){
    const bearerHeader = req.headers['authorization']
    if(bearerHeader !== undefined){
        const bearerToken = bearerHeader.split('')[1]
        req.token= bearerToken
        next()
    }
    else{
        res.sendStatus(403)
    }
}

module.exports ={verifyJWTToken,validateJWTToken,signJWT}