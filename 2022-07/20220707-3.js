let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220707.txt').toString().trim().split("\n");
let num1 = +input[0];
let num2 = +input[1];

if(num1 > 0 && num2 > 0) {
    console.log(1)
} else if(num1 < 0 && num2 > 0) {
    console.log(2)
} else if(num1 < 0 && num2 < 0) {
    console.log(3)
} else {
    console.log(4)
}