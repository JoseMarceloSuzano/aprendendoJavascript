//armazenando uma função dentro de varável
const imprimirSoma = function(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável

const soma = (a, b) => { //substitui o function
    return a + b;
}

console.log(soma(2, 3));

//retorno implícito
const subtracao = (a, b) => a - b; //retorno da função na mesma linha
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("Legal!!"); //exemplo de somente um valor