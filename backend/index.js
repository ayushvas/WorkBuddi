const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const requestRoute = require("./routes/request");
const cors = require('cors');
const cookies = require("cookie-parser");

app.use(cookies());
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("DB connection successful")})
.catch((err)=>{console.log(err)});



// ADD THIS

app.use(cors({ credentials: true, origin: true }))

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/requests", requestRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("running");
});