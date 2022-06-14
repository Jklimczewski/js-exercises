const poKolei = (fun1, fun2, cb) => { 
    fun1(5, n => fun2(n, m => cb(m)))
};

const fun1 = (y, cb) => {
    setTimeout(() => cb(y+1), 4000)
}
const fun2 = (y, cb) => {
    setTimeout(() => cb(y * 2), 3000)
}
const cb = (y) => {
    console.log(y)
}

poKolei(fun1, fun2, cb)