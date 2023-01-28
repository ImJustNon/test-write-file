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
    fs.writeFile(path.join(__dirname + "/temp/data.txt"), data, (err) => {
        if(err){
            return res.send(err);
        }
        res.send("Success");
    });
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