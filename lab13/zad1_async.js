const poKolei = async (fun1, fun2, cb) => { 
    const x = await fun1(5);
    const y = await fun2(x)
    cb(y)
};

const fun1 = (y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(y + 1), 4000)
    })
}
const fun2 = (y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(y * 2), 3000)
    })
}
const cb = (y) => {
    console.log(y)
}

poKolei(fun1, fun2, cb)