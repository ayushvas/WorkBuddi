const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");

//REGISTER
router.post("/register", async (req, res)=>{
    const newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        }
    );
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        // console.log(err);
        res.status(500).json(err);
    }
    

});

//LOGIN
router.post("/login", async (req,  res)=>{
    try{
        console.log("trying");
        console.log(req.body);
        const user = await User.findOne({username: req.body.username});
        if(!user){
            res.status(401).json("Wrong credentials");
        }else{
            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            // console.log(originalPassword);

            if(originalPassword !== req.body.password){ 
                res.status(401).json("Wrong Credentials");
            }else{  
                const accessToken = await jwt.sign({
                   id: user._id, isAdmin: user.isAdmin ,
                }, process.env.JWT_SEC, {expiresIn: "3d"}); 
                const {password, ...others} = user._doc;

                res.status(200).cookie('token', accessToken, { maxAge: 60 * 60 * 1000, httpOnly: true }).json({...others, accessToken});
                console.log(req.cookies);
            }
        }
         
        
        
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/logout", verifyToken, (req, res)=>{
    // console.log("logging out");
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    })
})
module.exports = router;