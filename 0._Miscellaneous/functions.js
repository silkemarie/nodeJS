console.log(add(5, 28));

//gets hoisted
function add(a, b) {
    return a + b;
}
//^en funktionsdeklaration. Ikke semikolon efter

// js er ikke fra top til bund. den går igennem hele filen og løfter dem op (hoisting), statements puttet på vores function call stack,
//kan referere funktioner inden de bliver deklarerede 

//må ikke skrive tal i variable navne

                            //anonymous function after the equal sign.. does not have a name
const addAnotherFunction = function (a, b) {
    return a + b;
};
// ^en statement. Semikolon efter

console.log(addAnotherFunction(3,6));


//vær konsistent med enten at bruge den anonyme funktionstype eller arrowtypen.
const addArrowFunction = (a, b) => {
    return a + b;
};

const addArrowFUnctionsCompact = (a, b) => a + b;

//mental byrde i kode der ikke er konsistent. 
//eslint, statisk analyse af din kode, extension. hvis man har brug for det. 

//forskel mellem funktion og funktionsreference:
function genericActionExecutor(anyCallbackFunction, name) {
    //execute som code ...
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;
//console.log(spitting("Amanda"));

console.log(genericActionExecutor(spitting, "Amanda"));
//^funktionsreference 

const nameAgain = "Jens";
console.log(`${nameAgain} is the man`);

const shooting = (name) => `${name} is shooting.`;
console.log(genericActionExecutor(shooting, "Malte"));
// funtionsreferencen er her: shooting

console.log(genericActionExecutor((name) => `${name} is running away`, "Murat"));