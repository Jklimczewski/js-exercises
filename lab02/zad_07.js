'use strict'
const person1 = {
    name: "Agata",
    age: 21
}
const person2 = {
    name: "Tomasz",
    age: 25
}
const person3 = {
    name: "Alicja",
    age: 31
}
const person4 = {
    name: "Jan",
    age: 20
}

const tab = [person1, person2, person3, person4];
let suma = 0;
for (let i=0;i<tab.length;i++) {
    suma+=tab[i].age;
}
let srednia = suma/tab.length;
console.log(suma);
console.log(srednia);