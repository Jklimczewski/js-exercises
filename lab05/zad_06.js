'use strict'

const tab = [0,1,2,3,3];

const wynik = tab.reduce( (akum, elem) => {
    if (elem === 5) akum = elem;
    return akum;
}, undefined)

console.log(wynik)