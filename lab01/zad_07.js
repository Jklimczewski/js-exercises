const tab = [1, 5, 6, 5, 5, 1, 5];
let count;
let tmp;

for (let i=0; i<tab.length; i++) {
    count = 0;
    tmp = 0;
    for (let j=0; j<tab.length; j++) {
        if (tab[i] == tab[j]) {
            count++;
        }
    }
    for (let k=0; k<i; k++) {
        if (tab[i] == tab[k]) {
            tmp = 1;
        }
    }
    if (tmp == 0) {
        if (count == 1) {
            console.log(tab[i] + " występuje " + count + " raz");
        } else {
            console.log(tab[i] + " występuje " + count + " razy");
        }
    }
}