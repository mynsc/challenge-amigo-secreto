let listaDeAmigos = [];

function agregarAmigo() {
    // Enlace entre el input el archivo html y el archivo js por DOM
    let  = document.getElementById('amigo');
    // Acceso al contenido del input
    let amigoAgregado = nombre.value;

    // Verifica si la entrada no está vacía
    if (amigoAgregado != '') {
        listaDeAmigos.push(amigoAgregado);
        nombre.value = ''; // Limpia la entrada luego de añadir el nombre de un amigo
    }
    else {
         alert('Por favor, inserte un nombre');
    }

    console.log(listaDeAmigos);
}