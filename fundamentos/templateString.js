const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `Olá ${nome}!` //substitui a concatenação (template)
console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`) //tudo após o dólar é interpretado

const up = texto => texto.toUpperCase(); //toUpperCase transforma tudo para maiúsculo
console.log(`Ei... ${up("cuidado")}!`);//chama a função up
