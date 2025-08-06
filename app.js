let listaDeAmigos = [];

function agregarAmigo() {
    // Enlace entre el input el archivo html y el archivo js por DOM
    let nombre = document.getElementById('amigo');
    // Acceso al contenido del input
    let amigoAgregado = nombre.value;

    // Verifica si la entrada no está vacía
    if (amigoAgregado != '') {
        listaDeAmigos.push(amigoAgregado);
        nombre.value = ''; // Limpia la entrada luego de añadir el nombre de un amigo
        mostrarLista();
    }
    else {
         alert('Por favor, inserte un nombre');
    }

    console.log(listaDeAmigos);
}
function mostrarLista () {
    // Enlace entre la lista desordenada del archivo html y el archivo js por DOM
    let listaDeNombres = document.getElementById('listaAmigos');
    // Limpia la lista existente para evitar duplicados
    listaDeNombres.innerHTML = '';
    
    // Recorre la lista y muestra los nombres que vayan agregándose en el arreglo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaDeNombres.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // Verifica si el arreglo tiene contenido
    if (listaDeAmigos.length == 0) {
        alert('Primero debes añadir nombres');
    }
    else {
        let indiceAleatorio = Math.floor(Math.random() * 10) + 1;
        
        
    }
}