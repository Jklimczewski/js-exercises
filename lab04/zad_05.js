function sum(x,acc=0) {
    if (x == 0) return acc
    else return sum(x-1,acc+x)
}

console.log(sum(4))