function usuario() {
    let user = {
        nome: prompt('Digite seu nome:'),
        idade: prompt('Digite sua idade:'),
        email: prompt('Digite seu email:')
    }

    let myUserJson = JSON.stringify(user)
    localStorage.setItem("user", myUserJson)
}

usuario()

