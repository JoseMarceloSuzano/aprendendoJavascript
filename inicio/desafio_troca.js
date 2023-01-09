let a = 7;
let b = 94;

let temp = a; // recebe o valor 7 inicial de a
a = b; // a vale 94 a partir desse momento
b = temp; // recebe o valor inicial de a

console.log(a);
console.log(b);