'use strict';

// Zadanie 2.1. 
// Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback niech wypisze zwrócony string w konsoli.
const prom = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Udało się"), 5000)
})
prom.then(res => console.log(res))

// Zadanie 2.2.
// Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.
const prom2 = new Promise( (resolve, reject) => {
    setTimeout(() => reject("Porażka"), 5000)
})
prom2.then( res => console.log(res), nores => console.log(nores))

// Zadanie 2.3.
// Zamiast then(), zmodyfikuj powyższy kod używając catch()
const prom3 = new Promise( (resolve, reject) => {
    setTimeout(() => reject("Porażka2"), 5000)
})
prom3.then( res => console.log(res)).catch(err => console.log(err))

// Zadanie 2.4. 
// Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli.

function multiplyAsync(x,y) {
    const prom4 =  new Promise((resolve, reject) => {
        if (typeof x == "number" && typeof y == "number") resolve(x*y)
        else reject("niestety")
    })
    return prom4.then(res => console.log(res)).catch(err => console.log(err))
}
multiplyAsync(3,2)