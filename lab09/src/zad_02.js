class Fraction {
    constructor(m, l) {
        this.numerator = m;
        this.denumerator = l;
    }
    multiplyBy(z) {
        if (typeof z === "number") {
            this.numerator *= z;
        }
        else if (z.__proto__ === Fraction.prototype) {
            this.numerator *= z.numerator;
            this.denumerator *= z.denumerator;
        }
        else { 
            console.log("Błąd") 
        }
    }
    static multiply(x, y) {
        return new Fraction(x.numerator * y.numerator, x.denumerator * y.denumerator)
    }
    print() {
        console.log(this.numerator + "/" + this.denumerator)
    }
}

const test = new Fraction(1, 2);
const test2 = new Fraction(3, 4);
test.print();
console.log(Fraction.multiply(test, test2));
test.multiplyBy(3)
test.print()
test2.multiplyBy("s")