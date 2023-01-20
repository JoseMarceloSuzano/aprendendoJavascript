function fun1() { }
//forma literal

const fun2 = function () { }
//armazenar em variável

const array = [function (a, b) {return a + b}, fun1, fun2]
//armazenar em um array
console.log(array[0] (2, 3))

const obj = {}
obj.falar = function() { return "Opa" }
console.log(obj.falar())
//Passar função como parametro

function run(fun) {
    fun()
}

run(function () { console.log("Executando..." )})
//função pode retornar/conter uma função

function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //retorna a primeira função e depois a segunda

const cincoMais = soma(2, 3)
cincoMais(4)