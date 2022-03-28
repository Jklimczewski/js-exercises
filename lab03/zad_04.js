function ile(tablica) {
    const wynik = [];
    for (let i=0;i<tablica.length; i++) {
        let count = 0;
        for (let j=0;j<tablica.length; j++) {
            if (tablica[i] == tablica[j]) {
                count++;
            }
        }
        wynik.push(tablica[i] + ": " + count)
    }
    return wynik;
}

console.log(ile(['js', 'react', 'js', 'angular', 'angular', 'js']))