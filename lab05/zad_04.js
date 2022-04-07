'use strict'

const obc = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
]

const wynik = obc.reduce((akum, elem) => {
    akum.push({ [elem.id]: elem });
    return akum;
}, [])

console.log(wynik)
