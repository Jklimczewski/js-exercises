'use strict';

function test(tab) {
    let x = tab.length-1;
    let tmp = true;
    tab.forEach(element => {
        if (element == tab[x]) x--;
        else {
            tmp = false;
        }
    });
    return tmp
}

console.log(test([1,2,3,3,2,1]))