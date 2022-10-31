/*
Why:

hvorfor vil vi gerne have callback functioner og promises? 
javascript is single-threaded
if we didnt write asynchronous code we would have blocking code.

use cases of asynchronous code:
- data traveling over a network (fetch)
- reading and writing to files
- import when asynchrnously calling URLs
- interacting with a database
- heavy calculations
- encryption/decryption
- event listeners (DOM)

basically anything that takes time (since we dont want to block and prevent other code from running).

Solution 1:
Callback functions.
problem: callback hell, pyramid of doom

Solution 2:
introducing promises!
promises er baseret på callbacks. Er ikke bedre end callbacks. Er ren æstetik.
promises kan have two different states:
- pending
- fullfilled
    - resolved, rejected 

Solution 3:
introducing async/await
again syntactic sugar
Vigtigt for Anders at vi vælger om vi vil bruge async/await eller promises og så holder os til dét til eksamen

*/

new Promise((resolve, reject) => {
    try {
        throw Error;
        resolve("Yay");
    } catch (stackTrace) {
        reject("Nay");
    }
})
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.log(errorMessage));



function howAwesomeAmI(name) {
    return new Promise((resolve, reject) => {
        resolve(`${name} is very awesome`);
    });
}

howAwesomeAmI("Anders")
    .then(answer => console.log(answer));




function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                //throw new Error("Bad");
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 3000);
    });
}

/*
somethingGoodSomethingBad()
    .then(shouldbeGood => console.log(shouldbeGood))
    .catch(shouldBeBad => console.log(shouldBeBad));
*/

async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        const awesomeMessage = await howAwesomeAmI("Michala");
        
        console.log(shouldBeGood), awesomeMessage;
    } catch (errorMessage) {
        console.log(errorMessage);
    }
}

asyncAwaitExample();


