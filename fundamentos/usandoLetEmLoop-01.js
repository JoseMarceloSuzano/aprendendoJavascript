const funcs = [];

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ();
funcs[8] (); //let respeita o parâmetro passado e var não, pois let tem escopo de bloco