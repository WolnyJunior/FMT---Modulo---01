fetch('data.json')
.then((response)=>{
    // console.log(response)
    return response.json();
})
.then((responseApi)=>{
    document.write(`Nome: ${responseApi.nome}<br>`)
    document.write(`Idade: ${responseApi.idade}<br>`)
    document.write(`E-mail: ${responseApi.email}<br>`)
})
.catch((error)=>{
    console.log(error)
})