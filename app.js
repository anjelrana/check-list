const express = require("express");
const bodyParser = require("body-parser");
const date = require( __dirname +"/date.js")

const items = ["code 7+ hours", "clean room", "meditate"];
const workLists = [];
const groceries =[];
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    const day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workLists
    });
});
app.get("/groceries", function(req, res) {
    res.render("list", {listTitle: "kitchen stuffs", newListItems : groceries});
})

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    const list = req.body.list;
    const item = req.body.items;
    if (list === "Work List") {

        workLists.push(item);

        res.redirect("/work");
    }  else if(list === "kitchen stuffs") {
         groceries.push(item);
         res.redirect("/groceries");
    } else {

        items.push(item);
        res.redirect("/");
    }

});
app.post("/", function (req, res) {

})
app.listen(3000, function () {
    console.log("The Server has started and working at the port 3000");
});