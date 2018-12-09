// Print the reverse of the array


function printReverse(arr){
	for (var i = arr.lenth -1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);


//**************************************************
//**********isUniform*******************************

function isUniform(arr){
	var first = isUniform[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[1] !== first){
			return false;
		}
	}
	return true;
}




//*********************************************


function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}



//************** Max *******************************

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

//*********************************************




