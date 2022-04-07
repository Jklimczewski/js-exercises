'use strict'

const tab = [1, -3, 6, -2, 9]

const wynik = tab.reduce( (akum,elem) => {
   if (elem > 0) akum.push(elem * elem);
   return akum;
}, [])

console.log(wynik)