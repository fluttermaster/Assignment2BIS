const express = require("express");

const app = express();

const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("input patient")
});

mongoose.connect('mongodb+srv://marwan:Mkharold$321@cluster0.mieuc.mongodb.net/test', () => console.log("connected to db"));

app.listen(3000)