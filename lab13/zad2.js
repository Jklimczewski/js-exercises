const grupuj = (funTab1, funTab2, cb) => {
    const kolumna1 = [];
    const kolumna2 = [];
    if (funTab1.length >= funTab2.length) {
        funTab1.forEach((elem, index) => {
            if (funTab2[index] == undefined) {
                kolumna1.push(elem());
                kolumna2.push(Promise.resolve(0));
            }
            else {
                kolumna1.push(elem());
                kolumna2.push(funTab2[index]());  
            }
        })
    }
    else {
        funTab2.forEach((elem, index) => {
            if (funTab1[index] == undefined) {
                kolumna2.push(elem());
                kolumna1.push(Promise.resolve(0));
            }
            else {
                kolumna2.push(elem());
                kolumna1.push(funTab1[index]());
            }
        })
    }
    const wynik = [];
    Promise.all([Promise.all(kolumna1), Promise.all(kolumna2)])
        .then(res => {
            res[0].forEach((el, index) => wynik.push([el, res[1][index]]))
            cb(wynik);
            })
};

async function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(5), 2000);
    })
}
async function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(6), 9000);
    })
}
async function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(7), 4000);
    })
}
async function func4() {
    return 8;
}
async function func5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(9), 6000);
    })
}
async function func6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 1000);
    })
}

const funTab1 = [func1, func2, func3];
const funTab2 = [func4, func5, func6];
const cb = (x) => {
    console.log(x)
}

grupuj(funTab1, funTab2, cb)