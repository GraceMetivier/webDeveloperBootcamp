var age = Number(prompt("Hello, how old are you?"));

if (age < 0){
	alert("error! Cannot be less than 0");
}

else if (age == 21){
	alert("Happy 21st Birthday! You can drink now!");
}

else if (age % 2 == 1){
	alert("Your age is odd!");
}

else if (age/age == 1){
	alert("Perfect Square!");
}

else {
	alert("Cool, thanks");
}