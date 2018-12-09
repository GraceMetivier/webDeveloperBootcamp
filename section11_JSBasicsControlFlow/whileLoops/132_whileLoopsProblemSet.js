console.log("Printing all numbers between -10 & 19");
var num = -10;

while(num <= 19){
	console.log(num);
	num ++;
}



console.log("Printing all even numbers 10 - 40 'VERSION 1' ");
var num = 10;

while (num <= 40){
	console.log(num);
	num +=2;
}



console.log("Printing all even numbers 10 - 40 'VERSION 2' ");
var num = 10;

while (num <= 40){
	if(num % 2 === 0) {
		console.log(num);	
	}
	num ++;
}



console.log("Printing all odd numbers from 300-333 'VERSION 1'");
var num = 301;

while (num <= 333){
	console.log(num);
	num +=2;
}



console.log("Printing all odd numbers from 300-333 'VERSION 2'");
var num = 301;

while (num <= 333){
	if (num % 2 !==0) {
	console.log(num);
	}
	num +=1;
}



console.log("Print all numbers divisible by 5&3 between 5-50 VERSION 1");
var num = 5;

while (num <= 50){
	if(num % 5 === 0 && num % 3 === 0)
		console.log(num);
	num ++;
}

