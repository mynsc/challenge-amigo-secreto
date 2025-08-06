let listaDeAmigos = [];
// Enlaces de elementos HTML con el archivo js a través del DOM
let nombre = document.getElementById('amigo');
let listaDeNombres = document.getElementById('listaAmigos');
let resultadoSorteo = document.getElementById('resultado');

function agregarAmigo() {
    let amigoAgregado = nombre.value; // Acceso al contenido del input

    // Verifica si la entrada no está vacía
    if (amigoAgregado != '') {
        listaDeAmigos.push(amigoAgregado); //Agrega el contenido del input a la lista
        nombre.value = ''; // Limpia el input luego de añadir el nombre de un amigo

        mostrarLista();
    }
    else {
         alert('Por favor, inserte un nombre');
    }
}

function mostrarLista() {
    listaDeNombres.innerHTML = ''; // Limpia la lista existente para evitar duplicados
    
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
        // Genera un número aleatorio entre 0 y la longitud del arreglo
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

        // Limpia la lista existente
        listaDeNombres.innerHTML = '';

        resultadoSorteo.innerHTML = `El amigo secreto sorteado es ${listaDeAmigos[indiceAleatorio]}`;
    }
}