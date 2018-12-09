#EJS Demo & tutorial

        * res.render("fileName") links it to another page (he's telling us to do it in .ejs)
                app.get("/fallinlovewith/:thing", function(req, res){
                    var thing = req.params.thing;
                    res.render("love.ejs");
                });

        * TRICK to opening page in cloud9 terminal =
                c9 fileName
        
    **** Writing JS in ejs (between the marks)
                <%= adding to the html %>
                   ex:  <h1> You fell in love with: <%= thingVar %> </h1>

                <% when using logic, use this %>
                    ex: <% if(thingVar.toLowerCase === "rusty"){ =>
                            <p> Good choice! Rusty is the best!</p>
                        <% }  %>

        * linking Variables:
                app.get("/fallinlovewith/:thing", function(req, res){
                    var thing = req.params.thing;
                    res.render("love.ejs", {thingVar: thing});
                });

                        * {thingVar: thing} settles it
                                * on apps.js page
                                * on love.ejs page (as long as thingVar is used on the love.ejs pg)


#EJS Control Flow

        * Show examples of control flow in EJS templates

        * Write if statements in an EJS file

        * Write loops in an EJS file
                [loop through all posts
                    make an entry div
                        title
                        tagline]
                <h1>The Posts Page</h1>
                <ul>
                    <% for(var i = 0; i < posts.length; i++){ %>
                        <li>
                            <%= posts[i].title %> - <strong><%= posts[i].author %></strong>
                        </li>
                    <% } %>
                </ul>


#Styles & Partials

        * Show how to properly include public assets
        * properly config app to use EJS
                * add to app.js page
                    app.use(express.static("public"));

                * add this link to any other page we want styled that way
                    <link rel="stylesheet" type="text/css" href="/app.css">   
                                                        || || ||
                *to dry up this code, check out bellow  \/ \/ \/

                * add file app.css in new directory (also put style sheets, java script we write, etc.)
                      (file setup)  
                        * EJSDemo
                            * node_modules
                            * public
                                * app.css
                            * views
                                * home.ejs
                                * love.ejs
                                * packages.json
                                * post.ejs
        * Use partials to dry up our code!
                * tell the page you're going to use the doc type .ejs
                * avoid typing .ejs constantly...
                        app.set("view engine", "ejs");

                * use the same boiler page as it's own 'partial' template to add on each page

                * mkdir views/partials
                * touch views/partials/header.ejs
                        * write header template

                            <!DOCTYPE html>
                            <html>
                                <head>
                                    <title> Demo App </title>
                                    <link rel="stylesheet" type="text/css" href="/app.css">
                                </head>
                                <body>

                * touch views/partials/footer.ejs
                        * write footer template

                                </body>
                                <footer>
                                </footer>
                            </html>


#Post Requests!!

        * write post sources & test them with Postman
        * Use a form to send a post request
        * Use body parser to get form data
