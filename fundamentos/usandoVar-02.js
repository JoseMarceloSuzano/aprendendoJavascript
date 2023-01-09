var numero = 1;
{
    var numero = 2;
    console.log("dentro =", numero);
}
console.log("fora =", numero); // var não fica restrito a esse bloco, apenas a funções