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
    akum += (elem.netto*1,23)
    return akum;
}, 0)

const b = (wishlist) => {
    return wishlist.reduce( (akum, elem) => {
        akum.push(elem.netto);
        return akum;
    }, [])
}
console.log(a);
console.log(b(wishlist))