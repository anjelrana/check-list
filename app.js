const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.get("/", function(req, res) {
   
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 0) {
        res.send("its a week end ");
    } else {
        
        res.sendFile(__dirname +"/index.html");
    }
});

app.listen(3000, function() {
    console.log("The Server has started and working at the port 3000");
});