const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const expressValidator = require('express-validator');
const dotenv = require("dotenv");
dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(`DB Connection Error: ${err.meessage}`))

mongoose.connection.on('error',err =>{
    console.log(`DB Connection Error: ${err.meessage}`);
})

const postRoutes = require("./routes/post");

app.use(bodyParser.json());
// app.use(expressValidator());
app.use("/",postRoutes);


app.listen(process.env.PORT )