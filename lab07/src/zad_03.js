const { lp3 } = require('./toplist');

const wynik6 = (n, min, max) => {
    const helper = lp3.slice(min, max);
    console.log(helper)
    while (n > 0) {
        console.log(helper[Math.floor(Math.random() * helper.length)].song);
        n -= 1;
    };
}
// wynik6(2, 4, 7)

const wynik7 = () => {
    lp3.slice(0, 10).forEach( (element, index) => {
        setTimeout( () => {
            console.log(element);
        }, 2000 * index)
    });
}

// wynik7();

const helper = lp3.reduce((akum, elem) => {
    if (!(akum.includes(elem.author))) {
        akum.push(elem.author);
    }
    return akum;
}, []);
const wynik10 = () => helper.forEach( el => {
        console.log(el + ":");
        const helper2 = lp3.reduce((akum,elem) => {
            if (elem.author == el) {
                akum.push( {song: elem.song, place: elem.place} );
            }
            return akum;
        }, [])
        console.log(helper2);
    });

// wynik10();