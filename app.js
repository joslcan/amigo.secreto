let listaAmigosSecretos = ['Amigos Secretos por sortear:'];


//Obtener el nombre del amigo en el box
function obtenerAmigo() {
    return String(document.getElementById('amigo').value);
}

//Guardar al amigo en la lista
function agregarAmigo(){
    
    if (document.getElementById('amigo').value == ''){
        alert('Agrega un nombre valido por favor\n( No dejes el campo vacio \^\_\~ )');
    } else {
        //Obtener el nombre que el usuario puso en el box
        let amigo = obtenerAmigo();
        //Agregarlo al arreglo 
        listaAmigosSecretos.push(amigo);
        
        //Actualiza la Lista
        actualizaLista (listaAmigosSecretos,'listaAmigos');    
        
        //Limpia la caja para ingresar otro nombre
        limpiarBox();
        
        //Activa el boton para sortear
        activarBoton('sortear');
        
        //Bloquear el boton añadir
        desactivarBoton('añadir');
    }
/*
    if (listaAmigosSecretos.length == 5) {
        limpiarLista('listaAmigos');
        while (listaAmigosSecretos.length != 1) {
            listaAmigosSecretos.pop();
        }       
    }
*/
    return;

}

//Actualiza la lista de amigos secretos a elegir
function actualizaLista(arreglo,listaDestino){
    limpiarLista(listaDestino);
    inciarListaAmigosSecretos();
    refrescaLista (arreglo,listaDestino);
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

/*
//Aumentar el tamaño de la lista de amigos secretos
function AgregarALista(arreglo,listaDestino) {
    const li = document.createElement('li');
    li.textContent = arreglo[arreglo.length-1];
    li.setAttribute('type','square');
    document.getElementById(listaDestino).appendChild(li);
    return;
}
*/

//Se vuelve a generar la lista con los nombres del arreglo
//Se usaria un bucle for
function refrescaLista (arreglo,listaDestino) {
    for (let l=1 ; l < arreglo.length ; l++) {
        const li = document.createElement('li');
        li.textContent = arreglo[l];
        li.setAttribute('type','square');
        document.getElementById(listaDestino).appendChild(li);
    }
    return;
}



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

//La funcion que asigna un texto
function asignarTextoAlElemento(elemento,texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//La funcion que limpia una caja de texto
function limpiarBox(){
    document.getElementById('amigo').value = '';
    return;
}


//Genera un numero pseudo-random entre el 1 y el largo del arreglo
function calcularAleatorioSinInicial(listaDestino){
    return Math.floor(Math.random()*(listaDestino.length-2))+1;
}

 


//La funcion que sorteará un amigo
function sortearAmigo() {
    //Presiona el boton
    //Se genera un numero random
    //(el numero tiene que ser entre 1 y el largo del arreglo)
    //Se usa ese numero para seleccionar un nombre del arreglo

    let amigoSeleccionado = calcularAleatorioSinInicial(listaAmigosSecretos);
    
    //Se usa el amigo seleccionado para mostrar en 'resultado' con un texto adicional
    //El texto adicional "Su amigo secreto es:"
    asignarTextoAlElemento('resultado',`Felicidades!! \nTu amigo secreto es:\n\t${listaAmigosSecretos[amigoSeleccionado]}`)
    
    //Se usa ese numero para eliminar ese nombre del arreglo
    //Se elimina la lista
    eliminarDeLista(listaAmigosSecretos,amigoSeleccionado);

    //Se actualiza la lista de amigos secretos que queda
    //Se elimina todos los elementos de la lista
    //NO SE ELIMINA LOS ELEMENTOS DEL ARREGLO!!
    //Se vuelve a iniciar la lista y se refresca el listado
    actualizaLista (listaAmigosSecretos,'listaAmigos');
    
    
    //
    if (listaAmigosSecretos.length == 1) {
        limpiarLista('listaAmigos');
        asignarTextoAlElemento('listaAmigos','Ya no hay mas amigos secretos por sortear');
        desactivarBoton('sortear');
    }
    
    return;
}
