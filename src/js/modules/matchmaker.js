export class MatchMaker {
    constructor(maxWeightDiff, targetMatches, numMats) {
        this.maxWeightDiff = maxWeightDiff;
        this.targetMatches = targetMatches;
        this.numMats = numMats;
    }

    generateMatches(athletes) {
        const matches = [];
        const unmatched = [...athletes];
        let currentMat = 1;
        let currentRound = 1;

        while (unmatched.length > 1) {
            const athlete = unmatched[0];
            const opponent = this.findBestOpponent(athlete, unmatched);

            if (opponent) {
                matches.push({
                    athlete1: athlete,
                    athlete2: opponent,
                    mat: currentMat,
                    round: currentRound
                });

                athlete.addOpponent(opponent);
                opponent.addOpponent(athlete);

                if (athlete.matches >= this.targetMatches) {
                    unmatched.splice(unmatched.indexOf(athlete), 1);
                }
                if (opponent.matches >= this.targetMatches) {
                    unmatched.splice(unmatched.indexOf(opponent), 1);
                }

                currentMat++;
                if (currentMat > this.numMats) {
                    currentMat = 1;
                    currentRound++;
                }
            } else {
                unmatched.splice(0, 1);
            }
        }

        // Sortujemy walki według maty i rundy
        return matches.sort((a, b) => {
            if (a.mat !== b.mat) return a.mat - b.mat;
            return a.round - b.round;
        });
    }

    findBestOpponent(athlete, athletes) {
        return athletes
            .filter(a => athlete.canFight(a, this.maxWeightDiff))
            .sort((a, b) => {
                if (a.matches !== b.matches) return a.matches - b.matches;
                return Math.abs(athlete.weight - a.weight) - Math.abs(athlete.weight - b.weight);
            })[0];
    }
}
