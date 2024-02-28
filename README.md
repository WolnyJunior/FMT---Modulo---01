# Semana-05
### Exercício-01
<p>Criar uma lista com 3 frutas e exibir no console a segunda fruta do array.</p>

### Exercícios-02
<p>Adicionar frutas ao array anterior, e remover o primeiro item do array.</p>

### Exercício-03
<p>Criar um array com 5 números, usar o loop for para imprimir no console.</p>

### Exercício-04
<p>Calcular e imprimir números de um array, utilizando .reduce</p>

### Exercício-05
<p>Imprimir a lista de números em ordem crescente.</p>

### Exercício-06
<p>Imprimir apenas números pares da array, utilizando filter()</p>

### Exercício-07
<p>Imprimir o quadrado dos números do array. </p>

# Semana-06
### Exercício-01
<ul>
  <li>A função verificarParOuImpar recebe um número como parâmetro.</li>
  <li>Dentro da Promise, verificamos se o valor passado é de fato um número.</li>
  <li>Se não for um número válido, a Promise é rejeitada com uma mensagem de erro.</li>
  <li>Se o número for válido, verificamos se é par ou ímpar e resolvemos a Promise com a mensagem correspondente.</li>
  <li>O exemplo de uso solicita ao usuário que insira um número e, em seguida, chama a função verificarParOuImpar 
    passando o número digitado. O resultado é então tratado com .then() para lidar com o caso de sucesso e .catch() 
    para lidar com erros.</li>
</ul>

### Exercício-02
<ul>
  <li>A função getUserInfo retorna uma Promise que é resolvida após um atraso de 2 segundos.</li>
  <li>Ela retorna um objeto com informações fictícias de um usuário.</li>
  <li>Usamos async e await para tornar a chamada assíncrona mais legível e fácil de entender.</li>
  <li>A função obterDadosDoUsuario chama getUserInfo usando await para esperar que a Promise seja resolvida.</li>
  <li>Usamos um bloco try/catch para lidar com possíveis erros durante a obtenção das informações do usuário.</li>
  <li>Utiliza o prompt para solicitar ao usuário que insira o nome, idade e email. Esses dados são então encapsulados em um objeto e retornados através da Promise</li>
  <li>A função isValidEmail utiliza uma expressão regular para validar se o formato do e-mail é válido. Se o e-mail fornecido pelo usuário não corresponder ao formato esperado, a função getUserInfo rejeitará a Promise com uma mensagem de erro.</li>
</ul>
