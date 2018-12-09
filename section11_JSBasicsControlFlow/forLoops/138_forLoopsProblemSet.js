console.log("Printing all numbers between -10 & 19");

for (var i = -10; i < 20; i++) {
	console.log(i);
}




console.log("Printing all even numbers 10 - 40 Version 1");

for (var i = 10; i < 41; i+=2) {
	console.log(i);
}


console.log("Printing all even numbers 10 - 40 Version 2");

for(var i = 10; i <= 40; i++){
	if (i % 2 === 0) {
		console.log(i);
	}
}




console.log("Printing all odd numbers from 300-333 Version 1");

for (var i = 301; i <= 333; i+=2){
	console.log(i);
}



console.log("Printing all odd numbers from 300-333 Version 2");

for (var i = 300; i <= 333; i++){
	if (i % 2 === 1) {
	console.log(i);
	}
}






console.log("Print all numbers divisible by 5 & 3 between 5-50");

for (var i = 5; i <= 50; i++){
	if (i % 3 === 0 && i % 5 === 0) {
	console.log(i);
	}
}
