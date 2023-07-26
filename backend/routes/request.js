const router = require("express").Router();
const User = require("../models/User");
const Request = require("../models/Request");
const {verifyToken, verifyTokenAndAuth} = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res)=>{
  console.log(req.body);
    const newRequest = new Request(req.body);

    try{
        console.log("making request");
        const savedRequest = await newRequest.save();
        res.status(200).json(savedRequest);
        console.log(savedRequest);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

//GET SENT REQUESTS
router.get("/find/:from", verifyToken, async (req, res) => {
  console.log(req.params.from);
    const qInterest = req.query.interest;
    const qStatus = req.query.status;
    try {
        let requests;
        if(qInterest && qStatus){
            requests = await Request.find({ from: req.params.from, interest: qInterest, status: qStatus });
        }else if(qInterest){
            requests = await Request.find({ from: req.params.from, interest: qInterest });
        }else if(qStatus){
            requests = await Request.find({ from: req.params.from, status: qStatus });
        }else{
            requests = await Request.find({ from: req.params.from });
        }
      
      res.status(200).json(requests);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET RECEIVED REQUESTS
router.get("/find/:to", verifyToken, async (req, res) => {
    const qInterest = req.query.interest;
    const qStatus = req.query.status;
    try {
        let requests;
        if(qInterest && qStatus){
            requests = await Request.find({ to: req.params.from, interest: qInterest, status: qStatus });
        }else if(qInterest){
            requests = await Request.find({ to: req.params.from, interest: qInterest });
        }else if(qStatus){
            requests = await Request.find({ to: req.params.from, status: qStatus });
        }else{
            requests = await Request.find({ to: req.params.from });
        }
      
      res.status(200).json(requests);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE REQUESTS
router.delete("/:id", verifyToken, async (req, res) => {
    try {
      await Request.findByIdAndDelete(req.params.id);
      res.status(200).json("Request has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

//UPDATE STATUS
router.put("/:id", verifyToken, async (req, res)=>{

    try{
      console.log("putting");
        const updatedRequest = await Request.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedRequest);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;