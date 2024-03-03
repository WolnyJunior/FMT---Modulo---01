fetch('https://viacep.com.br/ws/01001000/json/', { method: "GET" })
    .then((response) => {
        return response.json();
    })
    .then((retornoApi) => {
        //logradouro, complemento - bairro - localidade/uf”
        alert(`Rua: ${retornoApi.logradouro}, ${retornoApi.complemento}\nBairro: ${retornoApi.bairro}\nDDD(${retornoApi.ddd})\nPopulação: ${retornoApi.ibge}\n${retornoApi.localidade}/${retornoApi.uf}`)
    })
    .catch((error) => {
        console.log(error)
    })