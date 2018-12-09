

// 4 different way to select the first <p> tag

document.getElementById("first");

document.getElementByClass("special");

document.getElementsByTagName("p");

document.querySelector("#first");

document.querySelector(".special");

document.querySelector("p");

document.querySelectorAll("#first");

document.querySelectorAll(".special")[0];
	//giving the index helps specify

document.querySelectorAll("p")[0];
	//again with the index ^^

document.querySelector("h1 + p");
	// making life harder but this could be handy evenually
	//the p I'm after is right after an h1. this helps me narrow it down