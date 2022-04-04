'use strict';
function fun2() {
    return "Dziala";
}
function fun(fun3) {
    return fun3();
}
console.log(fun(fun2));