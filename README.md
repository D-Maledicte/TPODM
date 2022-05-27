# TPODM
Pagina del TPO
Se añadieron los siguientes comentarios que se encuentran ubicados dentro de cada archivo para detallar las funcionalidades mas llamativas/complejas/importantes de cada uno de los html
HTML :
Index - 
Incorpore distintos tipos del mismo favicon para mayor compatibilidad--> 
![image](https://user-images.githubusercontent.com/95052865/170641630-6103056a-aa62-4b56-bddd-c7eba90a8ae8.png)


El proposito de main_body es el de contar con una clase adicional para lograr el contraste el fondo del body y el fondo de las secciones--> 
![image](https://user-images.githubusercontent.com/95052865/170642065-6fa4fa23-99e6-45f7-a4a9-60a98840c3ba.png)


Animacion incorporada en el header para realizar un cambio de color gradiente--> 
![image](https://user-images.githubusercontent.com/95052865/170642191-6bddc1c8-7849-4d02-be1f-591ec36717b5.png)


Nav con transiciones al pasar el mouse efectuando un cambio de color-->
![image](https://user-images.githubusercontent.com/95052865/170642372-f8d04d47-a515-46d0-838f-da4c717ff13d.png)


Seccion principal con varios parrafos que comparten grid con un aside en forma de blackquote-->
Seccion de anuncio con animacion de desplazamiento siempre y cuando el ancho de pagina lo permita-->
Footer con un diseño de cartas desplegadas en grid y luego corregidas por grupo con flex-->
Encuesta -
Formulario multipagina diagramado en html, estilizado en css y con interaccion mediante JavaScript-->
Musica -
Plantilla de CSS adicional donde se incorpora el estilo mas minimalista del carrusel para evitar afectar el diseño integral de la pagina-->
Script inicial para asegurar de cargar el carrusel correctamente-->
Carrusel de splidejs incorporado por medio de NPM y adaptando el ancho del contenido iframe dentro-->
Iframe incorporado para añadir una lista expandida del contenido mostrado en el carrusel-->
Script necesario para el funcionamiento del carrusel-->
Galeria -
Galeria full responsive con interaccion al hacer click desplegando un zoom de la imagen con el fondo oscurecido para mejor apreciacion-->

JavaScript:
JSForm -
Define la pestaña como la primera (0)-->
Muestra la pestaña actual-->
Esta funcion mostrara en pantalla la pestaña actual del formulario-->
Arregla los botones de prev y next-->
Corrige la pestaña para que sea la actual-->
Esta funcion define que pestaña se mostrara en pantalla-->
Sale de la funcion si alguno de los inputs no esta validado-->
Oculta la pestaña actual-->
Realiza el salto de una pestaña a otra de 1 en 1-->
Si se ha llegado al final del formulario-->
El formulario es enviado-->
En cualquier otra situacion muestra la pestaña actual-->
Esta funcion realiza la validacion de los campos-->
realizamos una comprobacion en cada uno de las pestañas por separado en busca de ciertos requisitos en cada uno de los campos-->
Si valido tiene el valor "true", marca la pestaña como finalizada y validada-->
devuelve el estatus de validacion-->
Esta funcion quita la clase "active" de todas las pestañas-->
y añade "active" a la pestaña actual-->

JSGallery
Llama al div modal y recopila sus id, selecciona los img con la clase "thumbnail" y efectua el pop-up con el img correcto dependiendo de en cual se clickee-->
Se reemplaza el src con una imagen de mejor calidad alojada en un data-->
Efectua la animacion de cerrar el pop-up con la imagen-->
