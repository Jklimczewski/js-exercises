'use strict'
function test() {
    const x = 2;
    return function helper(y) {
        return x + y
    }

    
}
console.log(test()(15))