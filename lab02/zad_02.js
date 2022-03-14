'use strict'
const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

for (let i=0;i<array.length;i++) {
    if (typeof array[i] == "string") {
        for (let j=i+1;j<array.length;j++) {
            if (typeof array[j]== "number") {
                let tmp = array[j];
                array[j]=array[i];
                array[i]=tmp;
            }
        }
    }
}
console.log(array);