let numeros = [5, 3, 18, 89, 2, 23, 90, 24]

const numPar = numeros.filter(num => {
    if (num % 2 == 0) {
        return true
    }
})

console.log(numPar)