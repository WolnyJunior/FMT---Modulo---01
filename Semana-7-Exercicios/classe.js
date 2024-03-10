const prompt = require("prompt-sync")();

//Exercicio 1 - criando a classe

class Produto {
    nome
    preco
    quantidade

    //Exercicio 2 - criando o construtor

    constructor(valorNome, valorPreco, valorQuantidade) {
        this.nome = valorNome
        this.preco = valorPreco
        this.quantidade = valorQuantidade
    }

    //Exercicio - 3 - criando método vender

    Vender(quantidadeVendida) {
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

}//fechamento da classe Produto


//Exercicio 7 - criando classe Pessoa
class Pessoa {
    nome
    idade
    profissao

    constructor(valorNome, valorIdade, valorProfissao) {
        this.nome = valorNome
        this.idade = valorIdade
        this.profissao = valorProfissao
    }
}

//Exercicio 8 - ciando classe Cliente
class Cliente extends Pessoa {
    telefone
    email
    clienteDesde //deve ser no formato string "ANO-MÊS-DIA"

    constructor(valorNome, valorIdade, valorProfissao, valorTelefone, valorEmail, valorClienteDesde) {
        super(valorNome, valorIdade, valorProfissao)
        this.telefone = valorTelefone
        this.email = valorEmail
        this.clienteDesde = valorClienteDesde
    }
}

const clienteSorin = new Cliente("Sorin", 34, "Programador", "986259144", "meuEmail@email.com", "2021-02-18")
// console.log(clienteSorin)


const notebook = new Produto("Notebook Samsung", "R$:3500,00", 25)
console.log(notebook)

notebook.Vender(12)
console.log(notebook)

notebook.Repor(25)
console.log(notebook)

notebook.MostrarEstoque()

notebook.AtualizarPreco("R$: 3599,00")
console.log(notebook)
