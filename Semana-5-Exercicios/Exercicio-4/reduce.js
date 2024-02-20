let numeros = [3, 18, 89, 2, 23]

let soma = numeros.reduce(somar)

function somar(total, valor){
    return total + valor
}

console.log(soma)