function unequal(x,y,z) {
    if (x === y || x === z || y === z) {
        return false
    }
    else return true
}
console.log(unequal(1,2,'2'))