// Llama al div modal y recopila sus id, selecciona los img con la clase "thumbnail" y efectua el pop-up con el img correcto dependiendo de en cual se clickee
const modal = document.getElementById('myModal');
const modalImg = document.getElementById("imgmodal");
const captionText = document.getElementById("caption");
var img = document.querySelectorAll('.thumbnail');
    
for (var i=0; i<img.length; i++){
    
    img[i].onclick = function(){
    modal.style.display = "block";
    //se reemplaza el src con una imagen de mejor calidad alojada en un data
    modalImg.src = this.getAttribute("data-image");
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
     
}
// Efectua la animacion de cerrar el pop-up con la imagen
modal.onclick = function() {
    imgmodal.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       imgmodal.className = "modal-content";
     }, 400);
    
 }       