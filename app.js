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

    if (listaAmigosSecretos.length == 5) {
        limpiarLista('listaAmigos');
        while (listaAmigosSecretos.length != 1) {
            listaAmigosSecretos.pop();
        }       
    }

    return;

}

//Elimina datos de un arreglo
function eliminarDeLista(arreglo,indice) {
    arreglo.splice(indice,1)
    return;
}


//Limpia la lista que se indique
function limpiarLista(listaDestino) {
    const lista = document.getElementById(listaDestino);
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return;
}

//Iniciar la lista con el texto
function inciarListaAmigosSecretos() {
    const li = document.createElement('li');
    li.textContent = listaAmigosSecretos[0];
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
    //Presiona el boton
    //Se genera un numero random
    //Se usa ese numero para seleccionar un nombre del arreglo
    //(el numero tiene quie ser entre 1 y el largo del arreglo)
    //Se usa ese numero para eliminar ese nombre del arreglo
    //Se elimina la lista
    //Se vuelve a generar la lista con los nombres del arreglo
    //Se usaria un bucle for
    //Se mostraria el nombre seleccionado en la lista 'resultado' con un texto adicional:
    //Inicializar el texto adicional "Su amigo secreto es:"
    //Cuando se vuelva a sortear, se elimina todo de la lista 'resultado' y se vuelve a generar
    //Tambien se podria condicionar a que no se borre y que solo borre todo cuando el arreglo.length sea mayor a 1

    return;
}
