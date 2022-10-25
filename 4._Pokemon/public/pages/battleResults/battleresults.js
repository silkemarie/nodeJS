/* //Hvis man putter winsP og lossesP herud, så er der mere loadtid og bruges mere memory
//det er kun bedst at have det herude, hvis vi skal bruge det flere gange. 
const winsP = document.getElementById("wins");
const lossesP = document.getElementById("losses");
*/

//putter mit winsP og lossesP herind, fordi jeg kun vil bruge det en enkelt gang til statistik. Nothing else
fetch("/api/battleresults/winsandlosses")
.then(response => response.json())
.then(results => {
    const winsP = document.getElementById("wins");
    const lossesP = document.getElementById("losses");

    winsP.innerText = results.wins;
    lossesP.innerText = results.losses;
})