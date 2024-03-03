fetch('https://api.thecatapi.com/v1/images/search?limit=10', { method: "GET" })
    .then((response) => {
        console.log(response)
        // Converte a resposta para JSON
        return response.json();
    })
    .then((respostaApi) => {

        // Itera sobre cada objeto de imagem na lista de imagens retornada pela API
        respostaApi.forEach(cat => {

            // Extrai a URL da imagem do objeto de imagem atual
            let imgCat = cat.url;

            // Escreve a tag <img> com a URL da imagem no documento
            document.write(`<img src='${imgCat}'/> <br />`)
        });
    })
    .catch((error) => {
        console.log(error)
    })