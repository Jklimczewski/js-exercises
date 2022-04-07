'use strict'

const tab = [1, 3, 6, 2, 9]

const wynik = tab.reduce((akum, elem, indeks) => {
    akum.push(indeks + ": " + elem);
    return akum;
}, [])

wynik.reduce((akum, elem) => {
    console.log(elem);
    return 0;
}, 0)