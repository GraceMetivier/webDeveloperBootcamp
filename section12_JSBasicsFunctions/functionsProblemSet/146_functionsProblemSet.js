console.log("Is Even --> True or False?");

var isEven = function(num){
	if (num % 2 === 0) {
		return(true);
	}
	return(false);
}



console.log("Factorials --> 6! is 6x5x4x3x2x1");

// function factorialize(num) {
//   // If the number is less than 0, reject it.
//   if (num < 0) 
//         return -1;
    
//   // If the number is 0, its factorial is 1.
//   else if (num == 0) 
//       return 1;
    
//   // Otherwise, call the recursive procedure again
//   else {
//       return (num * factorialize(num - 1));
//    }
//  }

function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	return result
}




console.log("kebabToSnake");

function kebabToSnake(str) {
    //replace all dashes with underscores
    var newStr = str.replace(/-/g, "_");
    //return str
    return newStr;
}