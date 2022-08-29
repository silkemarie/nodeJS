// --------------------------------------
// Variables, strings, numbers
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";


// Print out the following in the console:
// My first name is Anders and my last name is Latif

const sent1 = "My first name is ";
const sent2 = " and my last name is ";

console.log(sent1, firstName, sent2, lastName);

//alternative løsninger:
// --------------------------------------
//const message = "My first name is " + firstName + " and my last name is " + lastName;
//console.log(message);
//console.log("My first name is", firstName, " and my last name is ", lastName);
//const message = `${2 + 2}`;
//const message = `My first name is ${firstName} and my last name is ${lastName}`;
//console.log(message);

// 3 måder at definere en string på:
// --------------------------------------
const messageVersionOne = "It's so easy";
const messageVersionTwo = 'I can write " easily.';
const messageVersionThree = `In backtics i can use both " and ', how nice is that`;

//kan ikke have dobbeltquotes inde i dobbeltquotes
//kan god thave dobbeltquotes inde i singlequotes


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2021";
const number = 1;

// Add the year plus the number
// The result should be 2022
// You cannot touch line 1 or 2


const result = Number(year) + number;

//alternative løsninger:
// --------------------------------------
//const result = parseInt(year) + number;
//const result = ~~year + number;
//const result = +year + number;

console.log(result);

// --------------------------------------
//Int og float er alle sammen bare Number i js 

console.log(typeof 32);
//her kan vi se at 32 er af typen Number. 



