var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here


var todos = ["buy turtle"]; 

var input = prompt("What would you like to do?");


while(input !== "quit"){
	//handle input
  if (input === "list") {
  	listTodos();
  } else if(input === "new") {
  	addTodo();
  	
  } else if(input === "delete"){
  	deleteTodo();
  }
	//ask again for new imput
	input = prompt("What would you like to do?");
}

console.log("OK, you quit the app");

function listTodos(){
	console.log("**********");
  	todos.forEach(function(todo, i){
  		console.log(i + ": " + todo);  		
  	});
  	console.log("**********");
}

function addTodo(){
	//ask for new todo
  	var newTodo = prompt("Enter new todo");
  	//add to todos array
  	todos.push(newTodo);
  	console.log("todo added");
}

function deleteTodo(){
	//ask for index of toso to be deleted
  	var index = prompt("Enter index of todo to delete");
  	//delete that to do
  	//splice()
  	todos.splice(index, 1);
  	console.log("Todo deleted");
}

}, 500);