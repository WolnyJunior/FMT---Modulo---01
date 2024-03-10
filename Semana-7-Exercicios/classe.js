const prompt = require("prompt-sync")();

//Exercicio 1 - criando a classe

class Produto {
    nome
    preco
    quantidade

    //Exercicio 2 - criando o construtor

    constructor(valorNome, valorPreco, valorQuantidade) {
        this.nome = valorNome,
            this.preco = valorPreco,
            this.quantidade = valorQuantidade
    }

    //Exercicio - 3 - criando método vender

    vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log("Estoque Insuficiente")
            console.log(`Existe apenas ${this.quantidade} unidades disponíveis`)
            return
        }

        this.quantidade -= quantidadeVendida
    }

    //
}