let listaAmigosSecretos = [];

//Obtener el nombre del amigo en el box
function obtenerAmigo() {
    return String(document.getElementById('amigo').value);
}



//la funcion que desactiva un boton
function desactivarBoton(boton) {
    document.getElementById(boton).setAttribute('disabled','true');
}

//La funcion que activa un boton
function activarBoton(boton) {
    document.getElementById(boton).removeAttribute('disabled');
}

//La funcion que asigna un texto
function asignarTextoAlElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//La funcion que limpia una caja de texto
function limpiarBox(){
    document.getElementById('amigo').value = '';
    return;
}


//La funcion que agregará un amigo
function agregarAmigo() {
    
}

//La funcion que sorteará un amigo
function sortearAmigo() {
    
}
