'use strict'
function ile(tablica) {
    const wynik = [];
    let tmp = 0;
    let count = 0;
    for (let i=0;i<tablica.length; i++) {
        count = 0;
        tmp = 0;
        for (let j=0;j<tablica.length; j++) {
            if (tablica[i] == tablica[j]) {
                count++;
            }
        }
        for (let k=0;k<i;k++) { 
            if (tablica[i] == tablica[k]) {
                tmp = 1;
            }
        }
        if (tmp == 0) {
            console.log(tablica[i] + ": " + count);
        }
    }
 }

ile(['js', 'js', 'react', 'js', 'angular', 'angular', 'js']);