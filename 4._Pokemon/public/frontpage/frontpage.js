/*
fetch("/pokemon")
    .then(response => response.json())
    .then(result => console.log(result));

    */

//const pokemonDiv = document.querySelector("#pokemon");
//^løber igennem flere træer, hvor Id kun løber igennem id-træet

/*
setTimeout(function(){
    //window.location.href = "/battle";
    window.location.replace = "battle";
 }, 3000);
*/

const pokemonDiv = document.getElementById("pokemon");


fetch("/pokemon")
.then(response => response.json())
.then(result => {
    result.data.results.forEach(pokemon => {
        const pokemonIndividualDiv = document.createElement("div");
        const pokemonNameP = document.createElement("p");
        pokemonNameP.innerText = pokemon.name;



        pokemonIndividualDiv.appendChild(pokemonNameP);
        pokemonDiv.appendChild(pokemonIndividualDiv);

    });
});