let listaAmigosSecretos = [];

function desactivarBoton(boton) {
    document.getElementById(boton).setAttribute('disabled','true');
}

function activarBoton(boton) {
    document.getElementById(boton).removeAttribute('disabled');
}

desactivarBoton('añadir');
activarBoton('añadir');


function asignarTextoAlElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
    
function limpiarBox(){
    document.getElementById('amigo').value = '';
    return;
}
    
    
    
function agregarAmigo() {
    
}
    
function sortearAmigo() {
    
}
