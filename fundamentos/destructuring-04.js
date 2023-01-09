function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
} //troca os valores de máximo e minimo se min for maior que max

console.log(rand([50, 40])); //troca os valores e 40 se torna minimo
console.log(rand([992])); // minimo é 992
console.log(rand([ , 10])); //minimo é 0
console.log(rand([])); //entre 0 e 1000