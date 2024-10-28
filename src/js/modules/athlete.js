export class Athlete {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.matches = 0;
        this.opponents = new Set();
    }

    canFight(opponent, maxWeightDiff) {
        return !this.opponents.has(opponent.name) &&
               this !== opponent &&
               Math.abs(this.weight - opponent.weight) <= maxWeightDiff;
    }

    addOpponent(opponent) {
        this.opponents.add(opponent.name);
        this.matches++;
    }
}

