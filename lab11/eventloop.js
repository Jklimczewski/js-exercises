'use strict';
// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}

//setTimeout(helloWorld, 1000)

//console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.

function delay() {
    console.log("Start");
    setTimeout(() => console.log("Koniec"), 2000);
}
// delay();

// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.

// let x = setInterval( () => console.log("Welcome"), 1000);

// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval

// let y = setInterval( () => console.log("Welcome"), 1000);
// setTimeout(() => clearInterval(y), 5000);

// Zadanie 1.5. 
// Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x ssekund i automatycznie zatrzyma się po upływie y sekund. 

function delay2(fun, x, y) {
    let tmp = setInterval(fun, x*1000);
    setTimeout(() => clearInterval(tmp), y*1000);
}

delay2(() => console.log("essa"), 1, 5);