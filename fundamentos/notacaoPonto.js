console.log(typeof console);
console.log(Math.ceil(6.1)); //arredonda o número

const objeto1 = {}
objeto1.nome = "Bola";
//objeto1["nome"] = "Bola2";
console.log(objeto1.nome);

function Obj(nome) {
    this.nome = nome; //nome associado ao objeto criado a essa função, recebe o atributo nome por parâmetro. Tranforma público o this.
    this.exec =  function() {
        console.log("Exec...")
    }
}

const objeto2 = new Obj("Cadeira");
const objeto3 = new Obj("Mesa");
console.log(objeto2.nome);
console.log(objeto3.nome);
objeto3.exec();