function mostrarFoto1(){
document.getElementById("foto").style.display = "block";
}
    

function ocultarFoto1(){
document.getElementById("foto").style.display = "none";
}

function validarTelefono1(){
var telefono = document.getElementById("telefono").value;
var mensaje = new Array();
var flagCosa = false;
var flagNumDigitos = false;
var flagNumCaracteres = false;
var numero = telefono.length;
if(telefono == ""){
    flagCosa = true;
    mensaje.push("Llene el campo de telefono");
}
var flagNumCaracteres = false;
if (numero!=10){
    flagNumCaracteres = true;
    mensaje.push("El teléfono debe tener exactamente diez números");
}
var digitos = 0;
for (var i=0; i<numero; i++){
if((telefono.charCodeAt(i) >= 48 || telefono.charCodeAt(i)>=57)) numero++
{
}   
if (digitos == 0){
    flagNumDigitos= true;
    mensaje.push("El télefono debe contener solo números del 0 al 9");
}
if(!flagNumCaracteres && !flagNumDigitos);{

    document.getElementById("msg").innerHTML="";
    var li = ocument.createElement("li")
    li.innerHTML = "<span class = 'correcto'>El telefono ingresado es correcto</span>";
    document.getelementById("msg").appendChild(li);
}else{
    imprimirErrores(mensaje);
}
}

function imprimirErrores(errores){
    var listaErrores = document.getElementById("msg");
    listaErrores.innerHTML = "";

    errores.forEach(function (error){
        var li =document.createElement("li")
        li.innerHTML = "<span class = 'error'>"+error+"</span>";
        listaErrores.appendChild(li);
    });
}
