function nwd(a,b) {
    if (a%b == 0) return b
    else return nwd(b,a%b)
}

console.log(nwd(8,12))