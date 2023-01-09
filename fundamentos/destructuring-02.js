const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; //ignora a primeira nota do primeiro array, criou um array dentro de outro array, e ignorou o primeiro elemento do segundo array. Então na segunda parte ele ignora o 8,8 que é o primeiro array, e o segundo array ele ignora apenas o primeiro número.
console.log(nota);