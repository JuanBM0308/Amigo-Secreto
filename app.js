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

function sortearAmigo() {
    const listaAmigos = getListaAmigos();

    if (listaAmigos.length === 0) {
        mostrarMensaje("No hay amigos por sortear.");
        return;
    }

    const amigoGanador = document.querySelector("#resultado");
    amigoGanador.innerHTML = "";
    const numeroSorteo = Math.floor(Math.random() * listaAmigos.length);
    const li = document.createElement("li");
    li.textContent = listaAmigos[numeroSorteo];
    amigoGanador.appendChild(li); 
    mostrarMensaje(""); // Borra mensaje despues de un sorteo valido
    deshabilitarSorteo();
}

// Muestra mensajes de error
function mostrarMensaje(mensaje) {
    const mensajeElemento = document.querySelector("#mensaje");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.display = "block";
    mensajeElemento.style.color = "red";
    mensajeElemento.style.fontWeight = "bold";
}

function deshabilitarSorteo() {
    document.querySelector("#botonSorteo").setAttribute("disabled", "true");
}

// Obtiene los amigos sin ser mostrados
function getListaAmigos() {
    return listaAmigos;
}
