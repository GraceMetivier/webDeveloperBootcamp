var express = require("express");
var app = express();

//connect to app.css in 'public' folder
app.use(express.static("public"));
// dry up code slightly by telling the page we're using .ejs
app.set("view engine", "ejs");

// res.render("fileName") links it to another page (he's telling us to do it in .ejs)
app.get("/", function(req, res){
    res.render("home.ejs");
});

// res.render("fileName") links it to another page (he's telling us to do it in .ejs)
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    //we don't need to state we're using 'love' .ejs with the code already stated: app.set("view engine", "ejs");
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My baby boy", author: "Chris"},
        {title: "Can you believe this kid?!", author: "Sam"}
    ];

    //we don't need to state we're using 'posts' .ejs with the code already stated: app.set("view engine", "ejs");
    res.render("posts", {posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening!")
});
