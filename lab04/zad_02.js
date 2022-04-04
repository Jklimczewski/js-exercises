'use strict';
const wynik = (function fun(tekst) {
    const tab = tekst.split(" ") ;
    let max = tab[0];
    tab.forEach(element => {
        if (element.length > max.length) {
            max = element;
        }
    });
    return max
})('Ala ma kota');

console.log(wynik)