const express = require("express");
const bodyParser = require("body-parser");

let items =["code 7+ hours","clean room", "meditate"];
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");



app.get("/", function (req, res) {
let today = new Date();

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",

};

let day = today.toLocaleTimeString("en-IN", options);

    res.render("list", {
        kindOfDay: day, newListItems: items
    });

});
app.post("/", function(req, res) {
     var item = req.body.items;
     items.push(item);
     res.redirect("/");
});

app.listen(3000, function () {
    console.log("The Server has started and working at the port 3000");
});

