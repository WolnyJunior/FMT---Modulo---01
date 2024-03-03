function usuario() {

    fetch('data.json')
        .then((minhaFetch) => {
            return minhaFetch.json();
        })
        .then((jsonData) => {
            let myUserJson = document.getElementById("info")
            myUserJson.textContent = JSON.stringify(jsonData)
        })
        .catch((error) => {
            console.log(error)
        });
}

usuario()