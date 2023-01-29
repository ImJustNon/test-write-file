const axios = require('axios');
const express = require('express');
const app = express();

const url = "https://test-write-file.nonnyha5.repl.co";

setInterval(() =>{
    axios.get(url).then((response) => {
        console.log(response.data);
    });
}, (5 * 60) * 1000); // 5 minute

app.get("/", (req, res) =>{
    axios.get(url).then((response) => {
        res.send(String(response.data));
    });
});

app.listen(8000, () =>{
    console.log("Listen on : 8000");
});