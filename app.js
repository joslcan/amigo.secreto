let listaAmigosSecretos = ['Amigos Secretos por sortear:'];


//Obtener el nombre del amigo en el box
function obtenerAmigo() {
    return String(document.getElementById('amigo').value);
}

//Guardar al amigo en la lista
function agregarAmigo(){
    
    if (listaAmigosSecretos.length == 1) {
        inciarListaAmigosSecretos();    
    }
    
    let amigo = obtenerAmigo();
    listaAmigosSecretos.push(amigo);
    actualizarLista(listaAmigosSecretos,'listaAmigos');
    limpiarBox();
    return;

    /*for (let i = 0; i < listaAmigosSecretos.length; i++) {
        let textoAmigo = listaAmigosSecretos[i];
        asignarTextoAlElemento('ul',textoAmigo);
    }
    */
}

//Limpia la lista que se indique
function limpiarLista(listaDestino) {
    document.getElementById(listaDestino).removeChild(li);
    return;
}

//Iniciar la lista con el texto
function inciarListaAmigosSecretos() {
    const li = document.createElement('li');
    li.textContent = listaAmigosSecretos;
    document.getElementById('listaAmigos').appendChild(li);
    return;
}

//Aumentar el tamaño de la lista de amigos secretos
function actualizarLista(arreglo,listaDestino) {
    const li = document.createElement('li');
    li.textContent = arreglo[arreglo.length-1];
    li.setAttribute('type','square');
    document.getElementById(listaDestino).appendChild(li);
    return;
}



//la funcion que desactiva un boton
function desactivarBoton(boton) {
    document.getElementById(boton).setAttribute('disabled','true');
    return;
}

//La funcion que activa un boton
function activarBoton(boton) {
    document.getElementById(boton).removeAttribute('disabled');
    return;
}

//La funcion que asigna un texto
function asignarTextoAlElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//La funcion que limpia una caja de texto
function limpiarBox(){
    document.getElementById('amigo').value = '';
    return;
}


//La funcion que sorteará un amigo
function sortearAmigo() {
    return;
}
