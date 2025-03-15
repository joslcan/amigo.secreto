# DESAFIO: Amigo Secreto

El proyecto y desafio "Amigo Secreto", propuesto y solicitado para la formación en ALURA, ayuda a poder desarrollar diferentes metodos de resolución ante la problematica del desafio dado.

El sistema "Amigo Secreto" permite poner una lista de un grupo de amigos y despuer elegir uno, de manera aleatoria, para ser su amigo secreto.

## Descripción

El sistema ayuda al usuario a poder generar un sorteo aleatorio de un listado de amigos y asi poder soleccionar al azar a un amigo secreto.
Al presionar el boton de "Añadir" se almacena el nombre que se coloque en un arreglo. Luego, y de inmediato, dicho nombre es borrado de la caja donde el usuario coloca el nombre y mostrado en una lista que es visible para el usuario.
Cuando hay almenos 1 amigo se activa el boton "Sortear amigo", lo cual, permite realizar el sorteo. el limite maximo de amigos es determinado por el arreglo, ya que el sistema no presenta un limite para la cantidad de amigos por sortear.
Cuando se sortee y un amigo es elegido, en ese momento dicho amigo es retirado de la lista de "Amigos Secretos por sortear". Para que la lista sea visible se requiere de minimo 1 amigo por sortear.

El sistema tiene 3 medidas de seguridad para evitar que se sortee vacio o con un espacio al inico:
- El sistema empieza con el boton "Anadir" desactivado
- Si el sistema detecta que se hizo click en el cuadro donde se escribirá el nombre del amigo, empezaste con espacio, o si solo hay espacios, se alertará ni bien se haga clic afuera de la caja. Pero si el campo esta "lleno" activará el boton "Añadir".
  Aun si, ni bien colocaste uno o mas espacios, haces clic defrente al boton "Añadir" el sistema primero te alertará que dejaste un espacio al incio.
- Si aun se persiste y se da click al boton "Añadir" luego del subestimar la alerta. El Sistema no te dejará ingresar lo que figure en dicho campo y alertará al usuario.

## Funcionalidades

🥇 Guardar el nombre de los amigos dados por el usuario y sortearlos.

🥈 Poder agregar mas amigos apesar que ya empezó el sorteo.

🥉 Mostrar el listado de amigos por sortear.

▶ Dar advertencia y/o no permitir al usuario ingresar vacios o nombres que empiecen con espacios.

## Capturas de Pantalla del Proyecto

![Inicio del sistema](https://github.com/joslcan/amigo.secreto/blob/main/AmigoSecreto-inicio.jpeg)

![Sistema mostrando un listado de nombres](https://github.com/joslcan/amigo.secreto/blob/main/AmigoSecreto-nombre.jpeg)

![Resultado del sorteo](https://github.com/joslcan/amigo.secreto/blob/main/AmigoSecreto-sorteo.jpeg)

## Abrir y ejecutar el programa del proyecto

- Descargar o clonar repositorio.
- Acceder a los archivos
- Ejecutar el archivo "index.html" en un navegador web (para la prubea se uso Microsoft Edge)
  
## Acceso al Proyecto

Puedes acceder y clonar el proyecto con el siguiente link:
(https://github.com/joslcan/amigo.secreto)

## Autor
- [Jose Cano V](https://github.com/joslcan)

## Oportunidades de Mejora
- Incluir un boton y una función para eliminar un amigo por si se ingresó mal el nombre.
- Incluir un boton y una función para volver a ejecutar el sorteo sin que se elimine la ultima persona elegida que salio.
  Esto podria evitar por si la persona le sale su mismo nombre

***
⫘🧀⫘⫘⫘ <:3)))~~ ⫘⫘⫘⫘
***
