const getRand = () => {
    return Math.floor(Math.random() * 1000);
};
 
const getNum = (cb) => {
    setTimeout(() => {
        cb(getRand());
    }, getRand() * 5);
};

const asyncSort = (dim) => {
    const tab = [];
    for (let i = 0; i < dim; i++) {
        getNum(n => {
            tab.push(n);
            if (tab.length == dim) {
                tab.sort().reverse();
                console.log(tab);
            }
        });
    }
};

const asyncSort2 = (dim) => {
    const tab = [];
    for (let i = 0; i < dim; i++) {
        getNum(n => tab.push(n));
    }
    let x = setInterval(() => {
        if (tab.length == dim) {
            tab.sort().reverse();
            console.log(tab);
            clearInterval(x);
        }
    }, 1000);
};

asyncSort(5);