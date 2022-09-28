let endereco ={
    rua:'Rua Albertino Cândido da Silva',
    numero : 26,
    estado : 'São Paulo',
    cep : '062330-70',
}



let pessoa = {
    nome : 'Matheus',
    idade : 23,
    cpf : '45880866858',
    altura : 1.67,
    endereco : endereco,
    solteiro : true,
    habilidade : ['JavaScript', 'Java', 'HTML', 'GOlang'],
    cumprimentar (){
        console.log(`Olá, tudo bem ? Meu nome é ${this.nome}`)
    }
}

console.log(pessoa.endereco.estado)

pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidade.push('Angular')
console.log(pessoa.habilidade)
console.log(pessoa['cpf'])