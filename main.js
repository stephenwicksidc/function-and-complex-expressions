// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:


function max(firstNum,secondNum) {

    if (firstNum > secondNum) {
    return(firstNum);
     } else {
        return(secondNum);
    }
} 
    max(5, 10);
    



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1,num2,num3) { 
    var result = Math.max(num1, num2, num3);
    console.log (result);
    return (result);
    
}
maxOfThree(5,10,15);

// 
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here
    if (isVowel=="a"||"i"||"o"||"u") {
        return (true); }
        else {
        return (false); }
    }
    console.log(isVowel("a"));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(number1, number2) {
    return number1 + number2;
}
console.log (sum(3,5));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function average(number1, number2, number3) {
    var sum =  (number1 + number2 + number3);
    return sum / 3;
}
console.log (average(5,5,5));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(sentence) {
    var n = (sentence.length);
    return n;
}
console.log (getLength("This is my sentence"));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan( number1, number2) {
    if (number1 < number2) {
        return true; }
    else {
        return false; 
    }
    }
console.log (greaterThan(5,10));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name) {
    var greeting = "Hello, " + name + "!";
    return greeting;
}
console.log (greet("Harry"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(word1, word2, word3, word4) {

    return word1 + word2 + word3 + word4;
}
console.log (madlib("The ", "car ", "is ", "blue."));