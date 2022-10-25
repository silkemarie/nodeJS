//importerer
import { Router } from "express";
import battleRouter from "./battleRouter";

//Instantierer
const router = Router();


//man kunne også have brugt et for-loop her. reduce er mere funktionelt men udenfor 
router.get("/api/battleresults/winsandloses", (req, res) => {
    const winsAndLosses = battleRouter.battleResults.reduce((acc, battleResult) => {
        battleResult.iWon? acc.wins++ : acc.losses++;
        return acc;
    }, { wins: 0, losses: 0});

    res.send(winsAndLosses);
});

router.get("/api/battleresults/pokemonbattled", (req, res) => {
// todo return an object of the following structure 
/* 
    {
        pokemonName: number,
        pokemonName: number,
        pokemonName: number,
        ....
    }
*/
});




//eksporterer 
export default router;