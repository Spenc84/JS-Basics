//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.
//Code Here
var inner = outer();

//Once you do that, invoke inner.
//Code Here
inner();


//Next problem
var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
//Code Here
console.log(callFriend()("435-215-9248"));


//Next Problem
/*
  Write a function called makeCounter that makes the following code work properly.
*/
//Code Here
var makeCounter = function() {
  var x = 0;
  return function() {
    return ++x
  }
}
  var count = makeCounter();
  console.log(count()); // 1
  console.log(count()); // 2
  console.log(count()); // 3
  console.log(count()); // 4


//Next Problem
/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/
//Code Here
var codeLove = function(){
  return "i love code";
}
var codeFriend = function(func){
  var flag = true;
  return function(){
    if(flag){
      flag=false;
      return codeLove();
    }
    else {
      return null;
    }
  }
};
var codeEcho = codeFriend();
console.log(codeEcho());
console.log(codeEcho());


//Next Problem
/*
  Similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter, 'func', will be a function and the second parameter, 'N', will be a number. Now, in 'fnCounter', return an anonymous function that allows the parameter function to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
//Code Here
var fnCounter = function(func, N) {
  return function() {
    if(N > 0) {
      N--;
      return func();
    }
    else {
      return "STOP";
    }
  }
}
var two = fnCounter(codeLove, 2);
console.log(two());
console.log(two());
console.log(two());
console.log(two());


//Next Problem
var counter = function() {
  function timer() {
     return console.log( i + '*');
  }
  var i = 1;
  for (i; i<=5; i++) {
    //setTimeout( called(i), i*1000 );
    called(i);
  }

};
counter();
function called(x){
  setTimeout( function(){console.log(x + '*')}, x*1000 );
}
/*
  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here
      The timer function is being passed to the setTimeout function, but the
      'i' variable is not. I expect an error will be thrown since 'i' is likely
      to be undefined in the setTimeout function

  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here
      Wrong. Apparentely i is an existing variable in the setTimeout function
      with a value of 6?

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

    //Code Here
      //Opps, I fixed the original code...


//Next Problem
//  Make the following code work
var funcArray = [];
var func = function (num) {
    return (function(){ return num; })
  //  return num;
  }
for (var i = 0; i < 6; i++) {
  funcArray.push(func(i))
};

/*for(var i = 0; i < 6; i++) {
    funcArray.push( function(){console.log(i);} );
  }

  funcArray[0](); //0
  funcArray[1](); //1
  funcArray[2](); //2
  funcArray[3](); //3
  funcArray[4](); //4
  funcArray[5](); //5
*/
  console.log(funcArray[0]()); //0
  console.log(funcArray[1]()); //1
  console.log(funcArray[2]()); //2
  console.log(funcArray[3]()); //3
  console.log(funcArray[4]()); //4
  console.log(funcArray[5]()); //5

//  *Hint: Don't let this fool you. Break down what's really happening here.
