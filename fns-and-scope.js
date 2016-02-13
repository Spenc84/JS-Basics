//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

//Code Here
var isTyler = function(name) {
  if (name === 'Tyler')
  return true;
  else
  return false;
}

//Next problem
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
//Code Here
var getName = function() {
  return prompt("Please enter your name: ", "Spencer");
}

//Next Problem
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
//Code Here
var welcome = function() {
  alert("Welcome "+getName());
}


//Next problem
//What is the difference between arguments and parameters?

  //Answer Here
    //Parameters are the variables that are included in the function declartion
    //Arguements are the variables that are passed to that function when it is called.


//Next problem
//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here
    //0 null undefined NaN false ""
    //console.log(!!x) -  Where x is the value that you're checking


//Next Problem
//Create a function called myName that returns your name
//Code Here
var myName = function() {
  return "Spencer";
}


//Now save the function definition of myName into a new variable called newMyName
//Code Here
var newMyName = myName;

//Now alert the result of invoking newMyName
console.log(newMyName());


//Next problem
//Create a function called outerFn which returns an anonymous function which returns your name.
//Code Here
var outerFn = function() {
    return function() {
      return "Spencer";
    }
}

//Now save the result of invoking outerFn into a variable called innerFn.
//Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
