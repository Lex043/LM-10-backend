const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const dataRoutes = require("./routes/data");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

app.use("/v1", dataRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

mongoose
    .connect(
        `mongodb+srv://alexferanmi390:${process.env.MONGODB_PASSWORD}@cluster1.xtdukbn.mongodb.net/messages?retryWrites=true&w=majority`
    )
    .then((result) => {
        app.listen(3001);
    })
    .catch((err) => {
        console.log(err);
    });

// app.listen(3001);
