const { lp3 } = require('./toplist');
const lodash = require('lodash');

const queen = lodash.reduce(lp3, (acc, elem) => {
    if (elem.author === "Queen") acc.push(elem.song);
    return acc;
}, [])

console.log(queen)

const floyd = lodash.reduce(lp3, (acc, elem) => {
    if (elem.author === "Pink Floyd" && elem.change >= 10) acc.push(elem.song);
    return acc;
}, [])

console.log(floyd)

function posortowana(n) {
    return lodash.dropRight(lodash.sortBy(lp3, 'change'), n);
}
// const posortowana = lodash.dropRight(lodash.sortBy(lp3, 'change'), n)

console.log(posortowana(3))