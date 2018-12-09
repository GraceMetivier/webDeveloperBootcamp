
// GET ELEMENT BY ID  (.getElementById) ********************************************************

	var tag = document.getElementById("highlight");



//GET ELEMENTS BY CLASS NAME  (.getElementsByClassName)   **************************************

	var tags = document.getElementsByClassName("bolded");


//GET ELEMENTS BY TAG NAME    (.getElementsByTagName)  *****************************************

	var tags = document.getElementsByTagName("li");

	var tags = document.getElementsByTagName("h1");


//	.querySelector *****************************************************************************

	//*****newer development... use the css selector language in the () --> ONLY RETURNS 1 ELEMENT

	//select by ID
	var tag = document.querySelector("#highlight");
 		
 		//can also do it like this... you can name it whatever you want
 		var li = document.querySelector("#highlight");

	//select by class
	var tag = document.querySelector(".bolded");
 	//******* ONLY GIVES THE FIRST MATCH

 	// select tag name
 	var tag = document.querySelector("h1");
 	//******* ONLY GIVES THE 1ST H1

 		//can also do it like this... you can name it whatever you want
 		var h1 = document.querySelector("h1");


//	.querySelectorAll *****************************************************************************
	//works the same way as ^^ but instead of just the first selected tag, you get all of them

	// select tag name
	var tag = document.querySelector("h1");
 	//******* GIVES ALL H1'S


 	//select by class
	var tag = document.querySelector(".bolded");
 	//******* GIVES ALL ELEMENTS WITH A CLASS "BOLDED"