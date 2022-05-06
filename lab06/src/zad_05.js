'use strict';

const sklep = require('./listaZakupow.js').listaZakupow;

const wynik1 = sklep.reduce( (akum, elem) => {
    akum.push({ [elem.produkt]: elem });
    return akum;
}, [])

const wynik2 = sklep.reduce( (akum, elem) => {
    if (elem.typ === "nabiał") akum += (elem.cena * elem.ilosc);
    return akum;
}, 0)

const wynik3 = sklep.reduce( (akum, elem) => {
    if (elem.jednostka === "kg") akum.push(elem.produkt)
    return akum;
}, []).sort()

const wynik4 = (typ) => {
    return sklep.reduce( (akum, elem) => {
        if (elem.typ === typ) {
            if (elem.cena* elem.ilosc < 10) akum.push(elem.produkt)
        }
        return akum;
    }, [])
}

const wynik5 = sklep.reduce( (akum, elem) => {
    if (elem.jednostka == 'sztuk') akum.push(elem.produkt);
    return akum;
}, [])

const wynik6 = sklep.reduce( (akum, elem) => {
    akum.push({ typ: elem.typ, opis: elem.produkt + ' - ' + elem.jednostka + ": " + elem.ilosc });
    return akum;
}, [])

wynik6.sort((a,b) => (a.typ > b.typ) ? 1 : ((b.typ > a.typ) ? -1 : 0))

let licznik = 0;
wynik6.reduce( (akum, elem) => {
    if (elem.typ == akum) {
        licznik += 1;
        console.log(licznik + ". " + elem.opis);
    }
    else {
        licznik = 1;
        console.log(elem.typ + ":");
        console.log(licznik + ". " + elem.opis);
        akum = elem.typ;
    }
    return akum;
}, "")

const highestPrice = sklep.reduce( (akum, elem) => {
    if (elem.cena > akum) akum = elem.cena;
    return akum;
}, 0)

const wynik7 = sklep.reduce( (akum,elem) => {
    if (elem.cena * elem.ilosc <= highestPrice) {
        akum.push( { [elem.produkt]: (elem.cena * elem.ilosc) });
    }
    return akum;
}, [])

// console.log(wynik1);
// console.log(wynik2);
// console.log(wynik3);
// console.log(wynik4("nabiał"));
// console.log(wynik5);
//console.log(wynik7);