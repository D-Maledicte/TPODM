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
![image](https://user-images.githubusercontent.com/95052865/170642532-5fd8b23f-cd54-4ad0-adfe-c94266ec9902.png)


Seccion de anuncio con animacion de desplazamiento siempre y cuando el ancho de pagina lo permita-->
![image](https://user-images.githubusercontent.com/95052865/170642637-206bf6f4-0259-4131-a49f-28bc8595aa15.png)



Footer con un diseño de cartas desplegadas en grid y luego corregidas por grupo con flex-->
![image](https://user-images.githubusercontent.com/95052865/170642688-e7042966-cc9f-4bee-abc5-5d4550b27952.png)



Encuesta -
Formulario multipagina diagramado en html, estilizado en css y con interaccion mediante JavaScript-->
![image](https://user-images.githubusercontent.com/95052865/170642861-11197f30-53c1-4c15-99b9-e1aa32ab7b90.png)
![image](https://user-images.githubusercontent.com/95052865/170642906-00b6f4eb-a868-4fa2-a598-a922f6cbe851.png)



Musica -
Plantilla de CSS adicional donde se incorpora el estilo mas minimalista del carrusel para evitar afectar el diseño integral de la pagina-->
![image](https://user-images.githubusercontent.com/95052865/170643074-13fe1e5b-69f5-4034-8ab5-72c70a5fd376.png)


Script inicial para asegurar de cargar el carrusel correctamente-->
![image](https://user-images.githubusercontent.com/95052865/170643109-425ce692-5cfc-4096-8018-6565cda066bb.png)



Carrusel de splidejs incorporado por medio de NPM y adaptando el ancho del contenido iframe dentro-->
![image](https://user-images.githubusercontent.com/95052865/170643283-53e50e93-bc14-4f0e-aecf-d57116b90369.png)



Iframe incorporado para añadir una lista expandida del contenido mostrado en el carrusel-->
![image](https://user-images.githubusercontent.com/95052865/170643337-c8d6bafd-5980-44ca-95ee-bef4dc85d72f.png)



Script necesario para el funcionamiento del carrusel-->
![image](https://user-images.githubusercontent.com/95052865/170643372-5ee1b4db-836a-48d0-bfb1-2640b734fbd9.png)



Galeria -
Galeria full responsive con interaccion al hacer click desplegando un zoom de la imagen con el fondo oscurecido para mejor apreciacion-->
![image](https://user-images.githubusercontent.com/95052865/170643495-b8f8b0f8-e172-4b46-9ed6-4eb0d77a2a7e.png)


JavaScript:
JSForm -


![image](https://user-images.githubusercontent.com/95052865/170643616-57ac58db-ca1a-408e-9ed9-e6a328b86f2a.png)
![image](https://user-images.githubusercontent.com/95052865/170643764-0810c4ea-3101-4dd1-bb63-3d2a9862a2a3.png)
![image](https://user-images.githubusercontent.com/95052865/170643824-e7c7f948-855a-41d7-8b49-1d6f881cc97d.png)
![image](https://user-images.githubusercontent.com/95052865/170643862-6b2ba5bf-379e-44bf-a0d5-01c38da1de85.png)

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

JSGallery:
![image](https://user-images.githubusercontent.com/95052865/170643962-b542dcdc-8729-4176-a123-79cf22037442.png)
![image](https://user-images.githubusercontent.com/95052865/170643999-15bed941-f18a-4490-80ff-70417809a1fa.png)



Llama al div modal y recopila sus id, selecciona los img con la clase "thumbnail" y efectua el pop-up con el img correcto dependiendo de en cual se clickee-->
Se reemplaza el src con una imagen de mejor calidad alojada en un data-->
Efectua la animacion de cerrar el pop-up con la imagen-->
