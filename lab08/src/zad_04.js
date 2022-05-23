const arr = [
    { key: 0, x: [4, 5, [6, 2]], y: [1, 2, [3, [4]]] },
    { key: 0, x: [1], y: [] }
]

const deep = (arg) => {
    const wynik_1 = arg.reduce( (acc, elem) => {
        if (elem.__proto__ == Array.prototype) acc += deep(elem);
        else acc += 1;
        return acc;
    }, 0);
    return wynik_1;
};

const wynik = arr.reduce( (akum,el) => {
    const x = deep(el.x);
    const y = deep(el.y);
    akum += x + y;
    return akum;
}, 0);

console.log(wynik);