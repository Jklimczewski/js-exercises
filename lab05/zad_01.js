'use strict'
const arr = [1, 3, 6, 2, 9];

const wynik = arr.reduce( (akum, elem) => {
    return akum + elem 
}, 0)

console.log(wynik)