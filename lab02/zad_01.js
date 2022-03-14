'use strict';
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];
const unique = [];
let tmp = 0;
let x = 0;

for (let i=0; i<numbers.length;i++) {
    tmp = 0;
    for (let j=0; j<numbers.length;j++) {
        if (i!=j) {
            if (numbers[j] === numbers[i]) {
                tmp=1;
                break;
            }
        }
        
    }
    if (tmp === 0) {
        unique[x]=numbers[i];
        x++;
    }
    
}
console.log(unique)