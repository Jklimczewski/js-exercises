const poKolei = (fun1, fun2, cb) => { 
    return cb(fun2(fun1()))
    // const wyniki_fun1 = fun1()
    // const wyniki_fun2 = fun2(wyniki_fun1)
    // cb(wyniki_fun2)
};

const fun1 = () => {
    setTimeout(() => {
        return 2
    }, 2000)
}
const fun2 = (x) => {
    return x + 1;
}
const cb = (y) => {
    console.log(y)
}

poKolei(fun1, fun2, cb)