const lista = [-1, 0, 1, 2, 3, 102, -120];

for (liczba in lista) {
    console.log(lista[liczba]);
}
min = lista[0];
max = lista[0];
for (let i = 1; i < lista.length; i++) {
    if (lista[i] < min) {
        min = lista[i];
    }
    if (lista[i] > max) {
        max = lista[i];
    }
}
console.log("Najmniejsza: " + min + " Największa: " + max);

for (let x=0;x < lista.length/2;x++) {
    let tmp = lista[lista.length-1-x]
    lista[lista.length-1-x]=lista[x]
    lista[x]=tmp
}
for (liczba in lista) {
    console.log(lista[liczba]);
}