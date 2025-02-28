// Lista para almacenar nombres 
let listaDeAmigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    // Agregar amigos a la lista
    const input = document.getElementById('amigo');
    const nombre = input.value.trim().toLowerCase(); // Convertir a minúsculas
    const lista = document.getElementById('listaDeAmigos');

    // Cuando el campo está vacío
    if (nombre === "") {
        alert('Por favor ingresa un nombre, no puede agregar espacio en blanco ');
        return;
    }

    // Verifica si el nombre ya fue agregado a la lista, ignorando mayúsculas/minúsculas
    for (let i = 0; i < listaDeAmigos.length; i++) {
        if (listaDeAmigos[i].toLowerCase() === nombre) {
            alert('Este nombre ya fue agregado a la lista');
            return;
        }
    }

    // Agregar el nombre al arreglo
    listaDeAmigos.push(nombre);
    // Actualiza la lista
    actualizarLista();
    // Limpia el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de nombres
function actualizarLista() {
    const listaUl = document.getElementById('listaAmigos');
    listaUl.innerHTML = '';

    // Recorrer la lista de amigos
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const nombre = listaDeAmigos[i];
        const li = document.createElement('li');
        li.textContent = (i + 1) + '. ' + nombre.charAt(0).toUpperCase() + nombre.slice(1); // Mostrar la primera letra en mayúscula
        listaUl.appendChild(li);
    }
}

// Función para sortear amigos
function sortearAmigo() {
    // En caso de que la lista de amigos esté vacía
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos en la lista para jugar');
        return;
    }

    // Verificar que hayan más de 2 participantes
    if (listaDeAmigos.length < 2) {
        alert('Deben haber al menos 2 participantes para poder jugar');
        return;
    }

    // Crear una copia de la lista de amigos para no modificar la original
    let amigosDisponibles = listaDeAmigos.slice(); 
    let resultadoSorteo = [];

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];
        let posibleAmigo;

        do {
            let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
            posibleAmigo = amigosDisponibles[indiceAleatorio];
        } while (posibleAmigo === amigo);

        // Elimina el nombre ya sorteado
        let indiceEliminar = amigosDisponibles.indexOf(posibleAmigo);
        amigosDisponibles.splice(indiceEliminar, 1);

        // Agregar el resultado con la primera letra en mayúscula
        resultadoSorteo.push(amigo.charAt(0).toUpperCase() + amigo.slice(1) + ' -> ' + posibleAmigo.charAt(0).toUpperCase() + posibleAmigo.slice(1));
    }

    // Mostrar resultados del sorteo
    mostrarResultados(resultadoSorteo);
}

// Función para mostrar los resultados del sorteo en el HTML
function mostrarResultados(resultadoSorteo) {
    const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = '';

    // Recorrer los resultados y agregarlos a la lista en HTML
    for (let i = 0; i < resultadoSorteo.length; i++) {
        const li = document.createElement('li');
        li.textContent = resultadoSorteo[i];
        resultadoUl.appendChild(li);
    }
}

// Función para reiniciar la lista de amigos
function reiniciarLista() {
    // Vaciar la lista de amigos
    listaDeAmigos = [];
    actualizarLista();

    // Limpiar la lista de resultados
    document.getElementById('resultado').innerHTML = '';
}
