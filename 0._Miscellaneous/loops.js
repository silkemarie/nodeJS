const barbieMovies = [
    {name: "Swan Lake", year: 2003},
    {name: "Princess and the Pauper", year: 2004},
    {name: "Fairytopia", year: 2014},
];

//map:
const ratedBarbieMovies = barbieMovies.map(movie => {
    movie.rating = 10;
    return movie;
});

//const ratedBarbieMovies = barbieMovies.map(movie => movie.rating = 10);

//console.log(barbieMovies);
//console.log(ratedBarbieMovies);

//filter:
const recentBarbieMovies = barbieMovies.filter(movie => movie.year > 2005);
//callback i filter tager imod en predicate, hvis den er true i filter, bliver den tilføjet, hvis den er false bliver den sorteret fra

console.log(recentBarbieMovies);


/* Loop advice:
map = mapper til et array af samme størrelse
filter = callback i filter tager imod en predicate, hvis den er true i filter, bliver den tilføjet, hvis den er false bliver den sorteret fra

Only use loops if you are doing "finger couting".
I.E. if counting to a number.

Only use forEach if you are doing something and dont care about the sult.
I.E. populating the DOM with elements. 

Use:
Map for mapping 1:1
Filter for filtering the array.
Reduce to reducing the content of the array. Anders forventer ikke at vi kan bruge reduce.
*/
