'use strict';

// Never EVER do this!!!
// totalGlobalVariable = "Malte";
// var globalVariable = "Malte";

// variable declaration
// Når jeg deklarerer const, skal jeg assign den samtidig

// en const kan ikke reassignes

const me = {
    name: "Anders"
};

const hobbies = [];
hobbies.push("Music");
console.log(hobbies);
// ^ her er et eksempel på at ændre værdien af en const 

me.hobbies = hobbies;
console.log(me);

//^har ikke ændret assignment, men har ændret værdierne
// const er ikke immutable. Det handler om assignment

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
//^efter ét sekunds timeout printer den i ud (5 5 5 5 5)

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
//^forskellen på var og let. printer 0 1 2 3 4 5


{
    let someValue = true;
}

