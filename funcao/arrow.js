let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //pode tirar os parenteses se houver apenas um parâmetro e tamb´m não precisa escrever o return entre chaves
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => "Olá" //se colocar o bloco tem que colocar o return
console.log(ola)