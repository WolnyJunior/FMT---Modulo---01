const prompt = require("prompt-sync")();

function verificarParOuImpar(numero) {
    return new Promise((resolve, reject) => {
      if (typeof numero !== 'number' || isNaN(numero)) {
        reject(new Error('Por favor, insira um número válido.'));
      } else {
        if (numero % 2 === 0) {
          resolve('Número digitado é par.');
        } else {
          resolve('Error: Número válido, é ímpar.');
        }
      }
    });
  }
  
  // Exemplo de uso:
  const numero = parseInt(prompt('Digite um número:'));
  verificarParOuImpar(numero)
    .then(resultado => {
      console.log(resultado);
    })
    .catch(error => {
      console.error(error.message);
    });

    /*
    1 - A função verificarParOuImpar recebe um número como parâmetro.
    2 - Dentro da Promise, verificamos se o valor passado é de fato um número.
    3 - Se não for um número válido, a Promise é rejeitada com uma mensagem de erro.
    4 - Se o número for válido, verificamos se é par ou ímpar e resolvemos a Promise com a mensagem correspondente.
    5 - O exemplo de uso solicita ao usuário que insira um número e, em seguida, chama a função verificarParOuImpar 
    passando o número digitado. O resultado é então tratado com .then() para lidar com o caso de sucesso e .catch() 
    para lidar com erros. */
  