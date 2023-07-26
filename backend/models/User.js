const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:{type: String, required:true, unique:true},
        email:{type: String, required:true, unique:true},
        password: {type: String, require:true},
        interests: {type: Array},
        isAdmin: {
            type:Boolean, 
            default:false,
        },
        isAvailable: {
            type:Boolean,
            default:true,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);