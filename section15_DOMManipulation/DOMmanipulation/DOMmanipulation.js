

// DOM Manipulation



//  STYLE			*************************************************


	//select
	var tag = document.getElementById("highligt");


	//manipulate
	tag.style.color = "blue";
	tag.style.border = "10px solid red";
	tag.style.fontSize = "70px";
	tag.style.background = "yellow";
	tag.style.marginTop = "200px";


	//main point is that tag.style happens and it accesses any css commands
			//ex: h1.style.color = "yellow";

			//tag = whatever tag + .style + whatever else you want

	// the value has to be in "strings"


//WARNING!!!!!!!
	//the examples above are not DRY
	//you put these in js to interact with the user, not to bloat the file
	// if you need to PERMINATELY CHANGE the styling, do it in CSS
	// if you are TESTING or MANIPULATING for INTERACTING with the site/user, js is okay
	//more info: picture in grace/documents/programming/practice/DOM.jpg

	
	// AN ALTERNATIVE	^^		******************************

		//***** rather than directly manipulating style w/ js, we can define a CSS class and then toggle it on or off with JS

		//instead of this...
			var tag = document.getElementById("highligt");
			tag.style.color = "blue";
			tag.style.border = "10px solid red";

		// define a class in CSS --> as seen in the css file

		// then in JS, you can do this
		var tag = document.getElementById(#highlight);
		// and add the new class to the selected elemenet 
		tag.classList.add("some-class");
		//some-class is a terrible name btw

		//with Class List

			//can add a class to the selected element
			tag.classList.add("another-class");

			// REMOVE a class
			tag.classList.remove("another-class");

			// TOGGLE a class (if the element already has that class, it'll remove it, . If the element doesn't have it, the toggle switch is flipped on and off)


// 	MANIPULATING HTML	


	// through .textContent you can access and change an html element's content
		
			//<p>This is an <strong> awesome </strong> paragraph </p>

		// Select the <p> tag:
			var tag = document.querySelector("p");

		// Retrieve the textContent:
			tag.textContent

				//ex: p.textContent

			// you get back: "This is an awesome paragraph"


		// Alter the textContent:
			tag.textContent = "blah <i> blah </i> blah";

			//you now get this back: "blah blah blah"

	//** WARNING *********

		// If using .text content, <bold> and <i> tags do not show.
			// If changing the html content, you may mess up the special tags


		//Similar to the textContent, except it returns a string of ALL the html contained in a given element

				//<p>This is an <strong> awesome </strong> paragraph </p>

			// Select the <p> tag:
			var tag = document.querySelector("p");

			// 	Retrieve the textContent:
			tag.innerHTML

			// you get back: "This is an <strong> awesome </strong> paragraph"


				//ex:
				document.querySelector("h1").textContent = "Replace title with this!";
				//returned: "Replace title with this!"