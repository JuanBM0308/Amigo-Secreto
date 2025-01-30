let listaAmigos = []

function agregarAmigo() {
    let capturarAmigo = document.querySelector("#nombreAmigo").value.trim();
    if (capturarAmigo === "" || !/^[a-zA-ZñÑ\s]+$/.test(capturarAmigo)) {
        alert("Por favor, inserte un nombre valido.");
    } else {
        listaAmigos.push(capturarAmigo);
        mostrarAmigos();
        document.querySelector("#nombreAmigo").value = "";
    }
}

function mostrarAmigos() {
    let amigosSeleccionados = document.querySelector("#listaAmigos");
    amigosSeleccionados.innerHTML = "";

    for (let x = 0; x < listaAmigos.length; x++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[x];
        amigosSeleccionados.appendChild(li);
    }
}