'use strict'

const element = func([ 'Ala', 'Kot', 'Pies' ],  y => y === 'Ala');  

function func(tab, pred) {
    return tab.reduce ( (akum, elem) => {
        if(pred(elem)) akum = elem;
        return akum;
    }, undefined)
}

console.log(element)