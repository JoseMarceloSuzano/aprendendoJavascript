const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if(x == 5){
        break //interrompe o array no índice 5
    } 
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue //não sai do laço e interrompe a repetição quando o Y(ÍNDICE) FOR 5
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: 
for(let a in nums) {
    for(let b in nums) {
        if(a == 2 && b == 3) 
            break externo //para parar o for mais externo
        console.log(`Par = ${a}, ${b}`)
    }
} //não utilizar esse tipo de código