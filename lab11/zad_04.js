function counter(x, y) {
    return function() {
        let tmp = 1;
        let tmp2 = setInterval(() => {
            if (tmp <= y) {
                console.log(tmp);
                tmp++;
            }
            else clearInterval(tmp2);
        }, x);
    }
}

const test = counter(1000, 5)();