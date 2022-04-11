'use strict';

const games = require('./games.js').games;

const wynik = games.reduce ((akum, elem) => {
    if (akum.length < 4) {
        if (elem.imageUrl != '') akum.push(elem.imageUrl);
    }
    return akum;
}, [])

console.log(wynik);