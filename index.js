const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});
const fs = require('fs');
const path = require('path');



app.get('/write', async (req, res) => {
    let data = "If you see this, It work!!"
    fs.writeFileSync(path.join(__dirname + "/temp/data.txt"), data);
    res.send("success!");
});
app.get('/read', async (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname + "/temp/data.txt"),{encoding: "utf8"});
        res.send(data);
    } catch (e) {
        res.send(e);
    }
});


app.listen(8000, async (req, res) => {
    console.log("Listen on port : 8000");
});