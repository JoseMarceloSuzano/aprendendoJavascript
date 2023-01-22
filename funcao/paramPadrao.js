//estrategia 1

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //se passar valor 0 ele vai retornar o valor 1

// estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for estritamente diferente de undefined, a vale 1
    b = 1 in arguments ? b : 1 //existe o segundo argumento na função soma2? Dentro de arguments existe o elemento 1?
    c = isNaN(c) ? 1 : c //testando se a variável não é um nothing a number, entre as estratégias é a mais segura
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))