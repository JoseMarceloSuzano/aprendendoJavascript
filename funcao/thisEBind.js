const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao) //aponta saudação para a função falar
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //bind vai amarrar o this ao objeto referenciado
falarDePessoa()

const falar2 = pessoa.falar
falar2()