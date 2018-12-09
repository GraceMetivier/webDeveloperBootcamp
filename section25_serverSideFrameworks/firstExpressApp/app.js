var express = require("express");
var app = express();

// "/" => "hi there!"
app.get("/", function(request, response){
    response.send("Hi there!");
});
// "/bye" => "goodbye!"
app.get("/bye", function(request, response){
    response.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(request, response) {
    console.log("someone made a request to /dog");
    response.send("MEOW!!!");
});

// Sometimes we don't want letter for letter in our url response
    // to get around this, we put a ':' in our command
    //but only something like /r/puppies
    //not /r/soccer/score
    //only works with that amount of '/'s

app.get("/r/:subredditName", function(request, response){
    response.send("welcome to a subreddit");
});

// this solves ^^ that problem
    //also helps direct a message to a specific subredditName
        // utalizes the request parameter
app.get("/r/:subredditName/comments/:id/:title", function(request, response){
    console.log(request.params);
    response.send("welcome to the comments page");
});
        // ^^^ r/soccer/comments/123/slime

    // making the consol.log more streamline...
app.get("/r/:subredditName", function(request, response){
    var subreddit = request.params.subredditName;
    response.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});
        //unfortunately, this is only saying
            //"WELCOME TO A SUBREDDIT"

// any otehr kind of ending will be routed to this response
app.get("*", function(request, response){
    response.send("YOU ARE A STAR!");
});

//Tell Express to listen for requests (start server) & on Cloud 9 it's a little different

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!!");
});
