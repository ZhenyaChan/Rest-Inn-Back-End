const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config({path: "./config/keys.env"});
const customerController = require("./controllers/customerController.js");
const propertyController = require("./controllers/propertyController.js");

const app = express();

const allowlist = ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://priceless-mirzakhani-0f2db6.netlify.app'];
const corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));
app.use(express.json());

app.use("/customers", customerController);
app.use("/properties", propertyController);


app.listen(process.env.PORT, ()=>{
    console.log(`The REST API is running on PORT: ${process.env.PORT}`);

    mongoose.connect(process.env.MONGODB_QUERY_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`);
    })
    .catch(err=>{
        console.log(`Error: ${err}`);
    });
});

