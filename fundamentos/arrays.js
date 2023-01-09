const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); //acessa o primeiro e o último valor
console.log(valores[4]);

valores[4] = 10;
console.log(valores); //para imprimir todo o array
console.log(valores.length); //para dizer quantos elementos o array possui

valores.push({id: 3}, false, null,"teste"); //para puxar elementos para o array
console.log(valores);

console.log(valores.pop()); // vai imprimir o último valor do array
delete valores[0]; //deleta o valor selecionado do array
console.log(valores);

console.log(typeof valores);