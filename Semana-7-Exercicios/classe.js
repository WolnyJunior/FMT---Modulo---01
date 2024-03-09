const prompt = require("prompt-sync")();

//Exercicio 1 - criando a classe

class Produto {
    nome
    preco
    quantidade

    //Exercicio 2 - criando o construtor

    constructor(nome, preco, quantidade) {
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade
    }
}

let produto = new Produto("Notebook", "3500,00", "01")

console.log(produto)
