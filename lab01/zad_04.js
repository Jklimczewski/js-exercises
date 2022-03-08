const tab = [4, 2, 1];
let tmp = 0;

for (let i=0; i<=2; i++) {
    if (tab[i] < 0) {
        tmp = 1;
        break;
    }
}
if (tmp == 0 ) {
    console.log("Liczby są dodatnie");
    if (tab[0] + tab[1] >= tab[2] && tab[1] + tab[2] >= tab[0] && tab[0] + tab[2] >= tab[1]) {
        console.log("Można zbudować trójkąt");
    } else {
        console.log("Nie można zbudować trójkąta");
    }
} else {
    console.log("Występuje ujemna");
}


