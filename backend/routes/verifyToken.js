const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    console.log(req.cookies);
    const { token } = req.cookies;
    if(token){ 
        
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err){
                res.status(403).json("Token is not valid");
            }else{
                req.user = user;
                next();
            }
        });
    }else{
        return res.status(401).json("You are not authenticated");
    }
}

const verifyTokenAndAuth = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Access denied");
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAuth};