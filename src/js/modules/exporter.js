export class Exporter {
    static toExcel(matches) {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet([
            ['Nr', 'Walka', 'Zawodnik 1', 'Waga 1', 'Zawodnik 2', 'Waga 2', 'Mata'],
            ...matches.map((match, index) => [
                index + 1,
                `Walka ${Math.floor(index / match.mat) + 1}`,
                match.athlete1.name,
                match.athlete1.weight,
                match.athlete2.name,
                match.athlete2.weight,
                match.mat
            ])
        ]);

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sparingi');
        XLSX.writeFile(workbook, 'sparingi_taekwondo.xlsx');
    }
}

