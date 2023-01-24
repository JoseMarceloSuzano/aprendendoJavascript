function maiorOuMenor(n1, n2) {
    if (n1 > n2) {
        return true
    } else if (n1 == n2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuMenor(1, 0))
console.log(maiorOuMenor(1, 1))
console.log(maiorOuMenor(1, 2))

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

console.log(maiorOuIgual(1, 0))
console.log(maiorOuIgual(1, 1))
console.log(maiorOuIgual(1, 2))