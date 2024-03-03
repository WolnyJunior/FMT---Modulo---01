fetch('https://viacep.com.br/ws/01001000/json/', { method: "GET" })
    .then((response) => {
        return response.json();
    })
    .then((retornoApi) => {
        //logradouro, complemento - bairro - localidade/uf”
        alert(`Rua: ${retornoApi.logradouro}, ${retornoApi.complemento}\nBairro: ${retornoApi.bairro}\nDDD(${retornoApi.ddd})\nPopulação: ${retornoApi.ibge}\n${retornoApi.localidade}/${retornoApi.uf}`)
        
        let confirmarEndereco = confirm("Os dados estão corretos?")
        if(confirmarEndereco == true){
            localStorage.setItem("endereco", JSON.stringify(retornoApi))
        }
    })
    .catch((error) => {
        console.log(error)
    })