'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

isEquals(2, '2'); // A D
isEquals(null, undefined); // A D 
isEquals(undefined, NaN); //  B D
isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); // B D
isEquals(0, ''); // A D
isEquals('0', ''); // B D
isEquals(+0, -0); // A C
isEquals(0, false); // A D
isEquals(0, 'false'); // B D
isEquals([1, 2], '1,2'); // A D

// 3 znaki '=' sprawdzają też typ porównywanych elementów 

!!false; // false
!!true; // true
!!undefined; // false
!!null; // false

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person); // wyświetli obiekt 
// person = {};
console.log(person); // wystąpi błąd, gdyż typ const nie pozwala na zmianę wartości stałej 

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3; 
console.log(number); { // zasięg blokowy zmieni wartość zmiennej na 4, ale tylko do momentu skończenia się bloku
    let number = 4;
    console.log(number);
}
console.log(number);

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

const arr = [1, 2];
const newArr1 = [arr, 3, 4];
console.log(newArr1); // dodaliśmy tablicę jako cały obiekt, a więc zostanie dodana tablica na 1 element
const newArr2 = [...arr, 3, 4];
console.log(newArr2); // zostaną dodane wszystkie elementy(!) tablicy, a nie tablica jako obiekt

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'javascript';
const arrWord = [...word];
console.log(arrWord); // string jest tablicą charów, a więc zostanie dodany każdy znak na następne miejsca tablicy

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;

result;

Number.isNaN(result); // true, gdyż nie możemy dzielić inta przez stringa
Number.isNaN(hello); // false, gdyż napis nie jest typu NaN

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

var car = 'BMW';

function showCar() {
    car = 'Audi';
    // model = 'A5';
    console.log('Great car!');
}

showCar();

car; // zostanie zmieniona wartość car na 'Audi', gdyż var pozwala na zmianę jego wartości
// model; // poprzez use strict nie możemy zainicjalizować zmiennej bez identyfikatora

// -------

var name = 'Bryan';

(function differentName() {
    var name = 'Adam';
    console.log(name);
})();
// nie wiem dlaczego tak to działa, var na pewno jest globalny 
console.log(name);

// -------

if (true) {
    var a = 2;
}
console.log(a); // var nie posiada cech blokowości (ignoruje) i zostanie wyświetlony nawet poza blokiem

if (true) {
    const b = 2;
}
// console.log(b); // nie wyświetli b, gdyż console log musiałby być w ifie i jego zasięgu blokowym

// -------

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); // zostanie wyświetlony ciąg od 0 do 9 i na końcu wartość 10: var pozwala wyświetlać poza blokiem

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i); // zostanie wyświetlony ciąg od 0 do 9 a poźniej zmienna 'i' zostaje zapomniana i nie ma jej w pamięci

// -------

var test = "var1";
var test = "var2"; // zmienna test zostanie nadpisana, co jest niebezpieczne, gdyż zapomina o poprzedniej wartości

let test2 = "let1";
// let test2 = "let2"; // możemy nadpisać wartość let, ale nie ją poraz kolejny zainicjalizować

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?
// Poprzez dodanie 'use strict' nie możemy: 
// - inicjaliować zmiennych bez identyfikatora
// - niektóre ukryte błędy, zmienia na ważne błędy i wyrzuca error przy wywołaniu programu




