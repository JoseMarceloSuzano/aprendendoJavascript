const a = {name: "Teste"};
console.log(a);

const b = a; //está apontando para o objeto de a e não para a variável a
b.name = "Opa"; //altera o nome do objeto a partir de b

console.log(a);

let c = 3;

let d = c; //aponta para o valor 3

d++; //soma +1 ao d

console.log(d);
console.log(c);


let valor; // não inicializada, undefined
console.log(valor);

valor = null; //não tem valor e não aponta para nenhum endereço de memória, ausência de valor
console.log(valor);
//console.log(valor.toString()); //gera erro pois nulo não tem referência para toString

const produto = {};
console.log(produto.preco); //preço não está definido no produto
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);