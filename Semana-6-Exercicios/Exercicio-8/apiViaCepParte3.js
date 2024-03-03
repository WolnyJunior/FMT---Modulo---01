//pegar o endereço no localStorage
let edenreco = localStorage.getItem("endereco");

//confirmar se já existe
if (edenreco == null) {

    //se não existe, chamar a função 
    pegarEndereço()
} else {

    //se ja existir, atualizar ou fechar
    let atualizar = confirm("Endereço já informado, deseja atualizar?");
    if (atualizar == true) {

        //se SIM para atualizar, chama a função
        pegarEndereço()
    } else {
        //se NÃO, fechar aplicação
        alert("Endereço não atualizado. Fechando app.")
    }
}

//funcção para encontrar endereço
function pegarEndereço() {

    let cep = prompt('Digite seu CEP: ')

    //busca endereço, através a API + prompt com CEP, 
    fetch(`https://viacep.com.br/ws/${cep}/json/`, { method: "GET" })
        .then((retornoFetch) => {
            return retornoFetch.json();
        })
        .then((retornoApi) => {
            
            //cria um alert para exibir os dados obtidos 

            //logradouro, complemento - bairro - localidade/uf - ddd - ibge
            alert(`Rua: ${retornoApi.logradouro}, ${retornoApi.complemento}\nBairro: ${retornoApi.bairro}\nDDD(${retornoApi.ddd})\nPopulação: ${retornoApi.ibge}\n${retornoApi.localidade}/${retornoApi.uf}`)


            let resposta = confirm("Os dados estão corretos?")

            //caso os dados estejam corretos, os dados são armazenados no localStorage.
            if (resposta == true) {
                localStorage.setItem("endereco", JSON.stringify(retornoApi))
            }else{
                //caso estejam errados, uma mensagem aparece na tela e inicia a função novamente
                alert('Corrigir dados de endereço.')
                pegarEndereço();
            }
        });
}