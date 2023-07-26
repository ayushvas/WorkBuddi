const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
    {
        from:{type: String, required:true},
        to:{type: String, required:true},
        interest:{type: String, required:true},
        text:{type: String, required:false, default:"Hey!"},
        status: {type: String, default:"pending"},
        
    },
    {timestamps: true}
);

module.exports = mongoose.model("Request", requestSchema);