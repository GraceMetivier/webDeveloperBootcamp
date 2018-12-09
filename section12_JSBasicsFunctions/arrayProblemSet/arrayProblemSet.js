// loop reversing array
console.log("CONNECTED");

function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);


//******************  isUniform Starts  ********

//isUniform([1,1,1,1]);			true
//isUniform([2,1,1,1]);			false
//isUniform(["a","b","p"]);		false
//isUniform(["b","b","b"]);		true


function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

isUniform([1,1,1]);
isUniform([2,1,3,5]);



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




