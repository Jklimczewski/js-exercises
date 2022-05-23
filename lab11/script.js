let licznik = 0;
let tmp = null;

function startCounter() {
    tmp = setInterval(() => console.log(licznik++), 1000);
}

function stopCounter() {
    clearInterval(tmp);
}

function clearCounter() {
    licznik = 0;
}