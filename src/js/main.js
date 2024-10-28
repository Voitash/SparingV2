import { UI } from './modules/ui.js';
import { MatchMaker } from './modules/matchmaker.js';
import { Athlete } from './modules/athlete.js';
import { validateAthletesData, parseAthleteData } from './utils/validators.js';
import { Exporter } from './modules/exporter.js';

class App {
    constructor() {
        this.ui = new UI();
        this.matches = [];
        this.initialize();
    }

    initialize() {
        this.ui.onGenerate = this.generateDraw.bind(this);
        this.ui.onExport = this.exportMatches.bind(this);
    }

    generateDraw() {
        try {
            const formData = this.ui.getFormData();
            const lines = validateAthletesData(formData.athletesData);
            
            const athletes = lines
                .map(line => {
                    const { name, weight } = parseAthleteData(line);
                    return new Athlete(name, weight);
                });

            const matchmaker = new MatchMaker(
                formData.weightDiff,
                formData.numMatches,
                formData.numMats
            );

            this.matches = matchmaker.generateMatches(athletes);
            this.ui.displayMatches(this.matches);
        } catch (error) {
            this.ui.showError(error.message);
        }
    }

    exportMatches() {
        if (this.matches.length === 0) {
            this.ui.showError('Najpierw wygeneruj sparingi!');
            return;
        }
        
        try {
            Exporter.toExcel(this.matches);
        } catch (error) {
            this.ui.showError('Błąd podczas eksportu do Excela');
            console.error(error);
        }
    }
}

// Inicjalizacja aplikacji
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

