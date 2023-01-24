function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { //dispara outra função a partir do intervalo
        this.idade++
        console.log(self.idade)
}/*.bind(this)*/, 1000) //a cada x ms a função vai ser disparada
}

new pessoa