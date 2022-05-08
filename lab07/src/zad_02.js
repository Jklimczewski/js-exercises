const { lp3 } = require('./toplist');
const lodash = require('lodash');

const wynik1 = lodash.reduce(lp3, (acc, elem) => {
    if (elem.author === "Queen") acc.push(elem.song);
    return acc;
}, [])

// console.log(wynik1);

const wynik2 = lodash.reduce(lp3, (acc, elem) => {
    if (elem.author === "Pink Floyd" && elem.change >= 10) acc.push(elem.song);
    return acc;
}, [])

// console.log(wynik2);

const wynik3 = (n) => lodash.dropRight(lodash.sortBy(lp3, 'change'), n);

// console.log(wynik3(3));

const pierwszy = lodash.head(lp3);
const wynik4 = {
    author: pierwszy.author,
    song: pierwszy.song
}

// console.log(wynik4);

const wynik5 = (tab) => {
    if (lodash.every(tab, lodash.isNumber)) {
        lodash.forEach(tab, function(value) {
            lodash.reduce(lp3, (akum, elem) => {
                if (elem.place == value) console.log(elem.song) ;
                return akum;
            }, 0)
        })
    }
    else console.log("Nie liczby");
}

// wynik5([1, 2, 4]);

const wynik6 = (n, min , max) => {
    while (n > 0) {
        let rand = lodash.random(min, max)
        lodash.reduce(lp3, (akum,elem) => {
            if (elem.place == rand) console.log(elem.song);
            return akum;
        }, 0)
        n -= 1;
    }
}
// wynik6(2, 3, 7);

const wynik7 = () => lodash.reduce(lp3, (akum, elem, index) => {
    if (index < 10) {
        lodash.delay(() => {
            console.log(elem.song);
        }, 2000 * (index + 1));
    }
    return akum;
}, 0);

// wynik7();


const wynik8 = () => lodash.forEach(lodash.filter(lp3, x => x.change < 0), elem => console.log(elem.song));

// wynik8();

const wynik9 = lodash.reduce(lp3, (akum, elem) => {
    return { ...akum, [elem.song]: { ...elem } };
}, {});

// console.log(wynik9);

const helper = lodash.uniq(lodash.reduce(lp3, (akum, elem) => {
    akum.push(elem.author);
    return akum;
}, []))
const wynik10 = () => lodash.forEach(helper, el => {
        console.log(el + ":");
        const helper2 = lodash.reduce(lp3, (akum,elem) => {
            if (elem.author == el) {
                akum.push( {song: elem.song, place: elem.place} );
            }
            return akum;
        }, [])
        console.log(helper2);
    });

// wynik10();

const wynik11 = () => lodash.forEach(helper, el => {
    const licznik = lodash.reduce(lp3, (akum, elem) => {
        if (elem.author == el) akum += 1;
        return akum;
    }, 0)
    console.log(el + " " + licznik)
});

// wynik11();

const wynik12 = [
    lodash.minBy(lp3, el => el.change ).change,
    lodash.maxBy(lp3, el => el.change).change
];
// console.log(wynik12);