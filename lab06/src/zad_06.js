const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4] },
    { key: 0, x: [1], y: [] }
]

const wynik = arr.reduce( (akum, elem) => {
    akum += elem.x.length + elem.y.length;
    return akum;
}, 0)

console.log(wynik);