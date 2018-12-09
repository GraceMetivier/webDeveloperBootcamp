var button = document.querySelector("button");
var isPurple = false;


// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });


// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     //cleans it up a little
//     isPurple = !isPurple;
// });

//now we're going to use toggle
    // a styled class was set up so now we just toggle back and forth

    button.addEventListener("click", function(){
        document.body.classList.toggle("purple");
    });
