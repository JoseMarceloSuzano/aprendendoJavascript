let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);

--num1; //tem prioridade para subtrair
console.log(num1);

console.log(++num1 === num2--); //somente depois da comparação ele subtrai de num2
console.log(num1 === num2); //agora o valor é diferente