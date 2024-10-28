export class UI {
    constructor() {
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.athletesDataField = document.getElementById('athletesData');
        this.weightDiffRange = document.getElementById('weightDifferenceRange');
        this.weightDiffValue = document.getElementById('weightDifferenceValue');
        this.resultsTable = document.getElementById('resultsTableBody');
    }

    bindEvents() {
        this.weightDiffRange.addEventListener('input', this.updateWeightDiffLabel.bind(this));
        document.getElementById('generateButton').addEventListener('click', () => this.onGenerate());
        document.getElementById('clearButton').addEventListener('click', this.clearForm.bind(this));
        document.getElementById('exportButton').addEventListener('click', () => this.onExport());
    }

    updateWeightDiffLabel() {
        this.weightDiffValue.textContent = `${this.weightDiffRange.value} kg`;
    }

    displayMatches(matches) {
        this.resultsTable.innerHTML = matches
            .map((match, index) => this.createMatchRow(match, index))
            .join('');
    }

    createMatchRow(match, index) {
        if (!match.athlete2) {
            return `
                <tr data-mat="${match.mat}">
                    <td>${index + 1}</td>
                    <td>Walka ${match.round}</td>
                    <td class="${this.getAthleteClass(match.athlete1)}">${match.athlete1.name} (${match.athlete1.weight}kg)</td>
                    <td class="text-danger">Brak przeciwnika</td>
                    <td>Mata ${match.mat}</td>
                </tr>
            `;
        }

        return `
            <tr data-mat="${match.mat}">
                <td>${index + 1}</td>
                <td>Walka ${match.round}</td>
                <td class="${this.getAthleteClass(match.athlete1)}">${match.athlete1.name} (${match.athlete1.weight}kg)</td>
                <td class="${this.getAthleteClass(match.athlete2)}">${match.athlete2.name} (${match.athlete2.weight}kg)</td>
                <td>Mata ${match.mat}</td>
            </tr>
        `;
    }

    getNumMats() {
        return parseInt(document.querySelector('input[name="numMats"]:checked').value);
    }

    getAthleteClass(athlete) {
        if (!athlete) return 'text-danger';
        if (athlete.matches === 0) return 'text-danger';
        if (athlete.matches > this.getTargetMatches()) return 'text-primary';
        return '';
    }

    getTargetMatches() {
        return parseInt(document.querySelector('input[name="numMatches"]:checked').value);
    }

    clearForm() {
        this.athletesDataField.value = '';
        this.resultsTable.innerHTML = '';
    }

    showError(message) {
        alert(message);
    }

    getFormData() {
        return {
            athletesData: this.athletesDataField.value,
            weightDiff: parseInt(this.weightDiffRange.value),
            numMatches: this.getTargetMatches(),
            numMats: this.getNumMats()
        };
    }
}
