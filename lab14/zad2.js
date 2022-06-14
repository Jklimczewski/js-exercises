const connect = (funTab, fun) => { 
    const kolumna1 = [];
    const kolumna2 = [];
    funTab.forEach((elem, index) => {
        kolumna1.push(elem());
        kolumna2.push(elem().then(n => fun(n)));
    })
    const wynik = [];
    Promise.all([Promise.all(kolumna1), Promise.all(kolumna2)]).then(n => {
        n[0].forEach((elem, index) => {
            wynik.push([elem, n[1][index]])
        })
        console.log(wynik)
    })
};

async function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(6), 9000);
    })
}
async function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(7), 4000);
    })
}
async function func3() {
    return 8;
}

async function func4(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x+1), 4000);
    })
}

const funTab = [func1, func2, func3];

connect(funTab, func4)
