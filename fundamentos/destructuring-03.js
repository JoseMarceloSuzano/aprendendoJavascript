function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor); //math.floor retorna o numero inteiro, por exemplo 7.99 retorna 7
}

const obj = {max: 50, min: 40};
console.log(rand(obj)); //retorna minimo de 50 e maximo de 40
console.log(rand({min: 955})); //retorna numero maior que 955 e menor que 1000
console.log(rand({})); //vai retornar numero entre 0 e 1000 aleatório
//console.log(rand()); vai dar erro