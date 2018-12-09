var express = require("express");
var app = express();


//visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// =========================================================

// //Visiting "/speak/oink" should print "oink"
// app.get("/speak/pig", function(req, res){
//     res.send("OINK!");
// });

// //Visiting "/speak/cow" should print "MOOOOO!"
// app.get("/speak/cow", function(req, res){
//     res.send("MOOOOO!");
// });


// //Visiting "/speak/dog" should print "WOOF WOOF!"
// app.get("/speak/dog", function(req, res){
//     res.send("WOOF WOOF!");
// });

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});


// =========================================================

//visitung "/repeat/hello/3" should print "hello hello hello"
app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i< times; i++){
        result += message + " ";
    }
    res.send(result);
});


// =========================================================

// if a user visits any other route, print:
    // "Sorry, page not found... What are you doing with your life?"
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});


//Tell Express to listen for requests (start server) & on Cloud 9 it's a little different
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!!");
});
