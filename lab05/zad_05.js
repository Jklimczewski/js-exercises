'use strict'

const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
]

const a = wishlist.reduce( (akum, elem) => {
    akum += (elem.netto*1,23);
    return akum;
}, 0)

const b = (wishlist) => {
    return wishlist.reduce( (akum, elem) => {
        akum.push(elem.netto);
        return akum;
    }, [])
}

const c = func(wishlist, x  => x.name + ': ' + x.netto);
function func(tab, pred) {
    return tab.reduce( (akum, elem) => {
        akum.push(pred(elem));
        return akum;
    }, [])
}

const d = (wishlist, pred) => {
    return wishlist.map(pred);
}

const e = func2(wishlist, x => x.netto < 500)
function func2(tab, pred) {
    return tab.reduce( (akum, elem) => {
        if (pred(elem)) akum.push(elem);
        return akum;
    }, [])
}


console.log(a);
console.log(b(wishlist));
console.log(c);
console.log(d(wishlist, x  => x.name + ': ' + x.netto));
console.log(e);
