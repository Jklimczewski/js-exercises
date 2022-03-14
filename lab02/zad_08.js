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
let srednia = 0;
for (let i=0;i<tab.length;i++) {
    srednia+=tab[i].age;
}
srednia = srednia / tab.length;

const powyzej = [];
const ponizej = [];
for (let i=0;i<tab.length;i++) {
    if (tab[i].age > srednia) {
        powyzej.push(tab[i].name);
    }
    else {
        ponizej.push(tab[i].name);
    }
}
console.log(ponizej)
console.log(powyzej)