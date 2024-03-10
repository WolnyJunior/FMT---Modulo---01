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

    //Exercicio 4 - criando metodo Repor
    Repor(quantidadeResposta) {
        this.quantidade += quantidadeResposta
    }

    //Exercicio 5 - criando metodo mostrarEstoque
    MostrarEstoque() {
        console.log(`O produto ${this.nome}, no valor de R$${this.preco}, possui ${this.quantidade} unidades.`)
    }

    //Exercicio 6  - criando metodo AtualizarPreco
    AtualizarPreco(novoValor) {
        this.preco = novoValor
    }
    
}//fechamento da classe