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
console.log(wynik1);
console.log(wynik2);
console.log(wynik3);
console.log(wynik4("nabiał"))