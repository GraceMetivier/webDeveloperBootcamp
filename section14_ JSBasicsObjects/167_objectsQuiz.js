// Exercise 1 **********************************

// var someObject = {
	
// 	someObject._name = "Hedwig";
	
// 	someObject.age = 6;
	
// 	var prop = "color"
// 	someObject[prop] = "red";
// };


// Exercise 2 *********************************

var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};

// Write code to retrieve "Malfoy" from someObject
// Go one "layer" at a time!

someObject.friends[0].name;



// Exercise 3 ***********************************

// Create an array of movie objects. 
// Each movie has a rating & 'has watched' properties

// you have watched "In Bruges" - 5 stars
// you have not seen "Frozen" - 4.5 stars
// you have seen "Mad Max Fury Road" - 5 stars
// you have not seen "Les Miserables" - 3.5 stars


// var movies = [
// 	{ 
// 	  title: "In Bruges",
// 	  seen: true,
// 	  rating: "5 stars"
// 	},
// 	{ 
// 	  title: "Frizen",
// 	  seen: false,
// 	  rating: "4.5 stars"
// 	},
// 	{ 
// 	  title: "Mad Max Fury Road",
// 	  seen: true,
// 	  rating: "5 stars"
// 	},
// 	{ 
// 	  title: "Les Miserables",
// 	  seen: false,
// 	  rating: "3.5 stars"
// 	}
// ];

// movies.forEach(function(movie){
// 	var result = "You have ";
// 	if (movie.seen){
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += movie.title + " - ";
// 	result += movie.rating;
// 	console.log(result);
// });


// Exercise 3 VERSION 2 ***********************************


var movies = [
	{ 
	  title: "In Bruges",
	  seen: true,
	  rating: "5 stars"
	},
	{ 
	  title: "Frizen",
	  seen: false,
	  rating: "4.5 stars"
	},
	{ 
	  title: "Mad Max Fury Road",
	  seen: true,
	  rating: "5 stars"
	},
	{ 
	  title: "Les Miserables",
	  seen: false,
	  rating: "3.5 stars"
	}
];

function buildString(movie){
	var result = "You have ";
	if (movie.seen){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += movie.title + " - ";
	result += movie.rating;
	return result;
};


movies.forEach(function(movie){
	console.log(buildString(movie));
});