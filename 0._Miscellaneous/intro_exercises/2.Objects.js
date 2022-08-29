// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 

console.log(alienMessage.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const myProfile = {
    name: "Silke",
    age: "29"
};

console.log(myProfile.name, " ", myProfile.age);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {
    isAllowed: "true"
};

console.log(stackOverflow);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;
thisSong.about = "Just a tribute.";

console.log(thisSong);

// --------------------------------------