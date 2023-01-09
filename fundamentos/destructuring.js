const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        rua: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa; //entre as chaves coloca o que você deseja retirar do objeto e depois do = qual a variável

console.log(nome, idade);

const {nome: a, idade: i} = pessoa; //altera o nome da variável
console.log(a, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {rua, numero, cep}} = pessoa; //para consultar o logradouro e numero dentro de endereço
console.log(rua, numero, cep);

//const {conta: {ag, num}} = pessoa;
//console.log(ag, num);