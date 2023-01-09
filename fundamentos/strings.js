const escola = "Cod3r";

console.log(escola.charAt(4)); //retorna a quarta letra do código
console.log(escola.charAt(5)); //retorna vazio
console.log(escola.charCodeAt(3)); //retorna valor no unicode
console.log(escola.indexOf("3")); //pega o caractere a partir do índice e retorna a posição

console.log(escola.substring(1)); //somente a letra 
console.log(escola.substring(0, 3)); //imprime do indice 1 a 3

console.log("Escola ".concat(escola).concat("!")); //concatenar string com variável e retorna Escola Cod3r, mas poderia substituir pelo +
console.log(escola.replace(3, "e")); //substitui o 3 pela letra e
console.log(escola.replace(/\d/, "e")); //substitui todos os dígitos do texto pela letra e
console.log(escola.replace(/\w/g, "e")); //substitui tudo pela letra e

console.log("Ana, Maria, Pedro".split(",")); //split gera arrays e dentro do parênteses o separador