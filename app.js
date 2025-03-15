/* === Inicializacion de la lista de Amigos Secretos === */

let listaAmigosSecretos = ['Amigos Secretos por sortear:'];



/* === Funciones principales === */

//Guardar al amigo en la lista
function agregarAmigo(){
    //Condicional por si el usuario activa el boton y quiere agregar el campo vacio
    if (document.getElementById('amigo').value == ''){
        alert('Agrega un nombre valido por favor\n( No dejes el campo vacio \^\_\~ )');

    } else {
        //Obtener el nombre del amigo
        let amigo = obtenerAmigo();

        //Agregarlo al arreglo 
        listaAmigosSecretos.push(amigo);
        
        //Actualiza la Lista
        actualizaLista (listaAmigosSecretos,'listaAmigos');    
        
        //Limpia la caja para ingresar otro amigo
        limpiarBox();
        
        //Bloquear el boton añadir
        desactivarBoton('añadir');
        
        //Activa el boton para sortear
        activarBoton('sortear');
             
    }

    return;
}

//La funcion que sorteará un amigo
function sortearAmigo() {
    //Se genera un numero random
    let amigoSeleccionado = calcularAleatorioSinInicial(listaAmigosSecretos);
    
    //Se usa el amigo seleccionado para mostrar en 'resultado'
    asignarTextoAlElemento('resultado',`Felicidades!! Tu amigo secreto es: ${listaAmigosSecretos[amigoSeleccionado]}`);
    
    //Se elimina al amigo de la lista
    eliminarDeLista(listaAmigosSecretos,amigoSeleccionado);

    //Se actualiza la lista de amigos secretos que queda
    actualizaLista (listaAmigosSecretos,'listaAmigos');
        
    //En caso que no hubieran mas amigos por sortear
    if (listaAmigosSecretos.length == 1) {
        limpiarLista('listaAmigos');
        asignarTextoAlElemento('listaAmigos','Ya no hay mas amigos secretos por sortear');
        desactivarBoton('sortear');
    }
    
    return;
}



/* === Funcion para generar un numero pseudo-aleatorio === */

//Genera un numero pseudo-random entre el 1 y el largo del arreglo
function calcularAleatorioSinInicial(listaDestino) {
    return Math.floor(Math.random()*(listaDestino.length-2))+1;
}



/* === Funciones para cuadros de texto === */

//Obtener el nombre del amigo en el box
function obtenerAmigo() {
    return String(document.getElementById('amigo').value);
}

//La funcion que limpia una caja de texto
function limpiarBox() {
    document.getElementById('amigo').value = '';
    return;
}

//La funcion que asigna un texto aun elemento
function asignarTextoAlElemento(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



/* === Funciones para arreglos === */

//Elimina datos de un arreglo
function eliminarDeLista(arreglo,indice) {
    arreglo.splice(indice,1);
    return;
}



/* === Funciones para las listas === */

//Actualiza la lista de amigos secretos a elegir
function actualizaLista(arreglo,listaDestino) {
    limpiarLista(listaDestino);
    inciarListaAmigosSecretos();
    refrescaLista (arreglo,listaDestino);
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

//Generar la lista con los nombres del arreglo
function refrescaLista (arreglo,listaDestino) {
    for (let l=1 ; l < arreglo.length ; l++) {
        const li = document.createElement('li');
        li.textContent = arreglo[l];
        li.setAttribute('type','square');
        document.getElementById(listaDestino).appendChild(li);
    }
    return;
}



/* === Funciones para los botones === */

//la funcion que desactiva un boton
function desactivarBoton(boton) {
    document.getElementById(boton).disabled = true;
    return;
}

//La funcion que activa un boton
function activarBoton(boton) {
    document.getElementById(boton).disabled = false;
    return;
}
