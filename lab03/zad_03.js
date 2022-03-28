function toArray(a,b) {
    if (typeof a == "object") {
        if (typeof b == "object") {
            return [...a, ...b];
        }
        else return [a, ...b];
    }
    else {
        if (typeof b == "object") {
            return [a, ...b];
        } 
        else return [a, b];
    }
}

console.log(toArray("es",2));