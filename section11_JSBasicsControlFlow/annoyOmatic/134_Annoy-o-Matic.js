var answer = prompt("Are we there yet?");


// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("Yay! We finally made it!");


// VERSION 2

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("Yay! We finally made it!");