export const validateAthletesData = (data) => {
    if (!data.trim()) {
        throw new Error('Proszę wprowadzić dane zawodników');
    }

    const lines = data.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    if (lines.length < 2) {
        throw new Error('Wprowadź co najmniej dwóch zawodników');
    }

    return lines;
};

export const parseAthleteData = (line) => {
    const parts = line.split(/[\t,\s]+/);
    const weight = parseFloat(parts[parts.length - 1].replace(',', '.'));
    const name = parts.slice(0, -1).join(' ').trim();

    if (!name || isNaN(weight)) {
        throw new Error(`Nieprawidłowy format danych: ${line}`);
    }

    return { name, weight };
};

