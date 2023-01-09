let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //duas exclamações vira true
console.log(!isAtivo); //uma exclamção vira false

console.log("os verdadeiros...");
console.log(!!3); //numero inteiro
console.log(!!-1); //numero inteiro
console.log(!!" "); //string com caractere
console.log(!!"texto"); //texto
console.log(!![]); //array
console.log(!!{}); //objeto
console.log(!!Infinity); //infinito
console.log(!!(isAtivo = true)); //alegar que é true

console.log("os falsos...");
console.log(!!0); //0 retorna false sempre
console.log(!!""); //string vazia
console.log(!!null); //null
console.log(!!NaN); //Nan
console.log(!!undefined); //undefined
console.log(!!(isAtivo = false)); //alegar que é falso
console.log(!!("" || null || 0 || "epa" || 123)); //retorna verdadeiro pois ao menos um retorna verdadeiro

let nome = "";
console.log(nome || "Desconhecido!"); //Se o nome for falso retorna o segundo valor