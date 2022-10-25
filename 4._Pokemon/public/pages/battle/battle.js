const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables.pop();



// todo start the battle against this pokemon
// fetch data about this specific pokemon

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon);
    const whoWon = Math.random();


    //task: add the image of the pokemon in the image tag 
    const battlingPokemonImage = document.getElementById("battling-pokemon-sprite");

    battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default;


    const iWon = Math.random() >= 0.5;
    const whoWonHeader = document.getElementById("who-won");
    if (iWon) {
        whoWonHeader.innerText = "You won!";
    } else {
        whoWonHeader.innerText = "You lost!";
    }

   
    const body = {
        pokemonBattled: pokemon.name,
        iWon
    };

//calls backend with information?
    fetch("/api/battles", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" }
    })

});
//application.json: det du får imod, unpack det som json 
//når vi sender fetch, skal vi sende en string. kan løse ved at skrive json.stringify foran vores object