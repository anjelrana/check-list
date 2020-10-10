const express = require("express");
const bodyParser = require("body-parser");

let items = ["code 7+ hours", "clean room", "meditate"];
let workLists = [];
let groceries =[];
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",

    };

    let day = today.toLocaleDateString("en-IN", options);

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
    let list = req.body.list;
    let item = req.body.items;
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