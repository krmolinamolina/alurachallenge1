const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};


function encriptar(texto){
        for (var key in reglas) {
                texto = texto.replaceAll(key, reglas[key]);
        }
        return texto;
}

function desencriptar(texto){
        for (var key in reglas) {
                texto = texto.replaceAll(reglas[key],key);
        }
        return (texto);
    
}

function validarEntrada(texto){
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  

        if (texto != "") {
                if(texto.match(mayusculas)||texto.match(caracteres)){
                        alert("No se permiten caracteres especiales ni mayusculas");
                        return false; 
                }
        } else {
                alert("Ingrese un texto");
                return false; 
        }

        return true; 
            
}




let btnEncriptar = document.querySelector("#btnEncriptar");

btnEncriptar.addEventListener("click",function ()  {
    let elementoEntrada = document.querySelector("#entrada-texto");
    let entradaTexto  = elementoEntrada.value;

        if (validarEntrada(entradaTexto)) {       
                let entradaEncriptada = encriptar(entradaTexto);
                document.getElementById("mensaje").innerHTML= '<p class="fs-5" id="texto">'+entradaEncriptada+'</p>';
                document.getElementById("button-mensaje").classList.remove("d-none");
                elementoEntrada.value = "";
        } else{
                elementoEntrada.value= "";
        }
               
})

let btnDesencriptar = document.querySelector("#btnDesencriptar");

btnDesencriptar.addEventListener("click",function ()  {
        let elementoEntrada = document.querySelector("#entrada-texto");
        let entradaTexto  = elementoEntrada.value;

        if (entradaTexto != "") {
                let entradaDesencriptada = desencriptar(entradaTexto);
                document.getElementById("mensaje").innerHTML= '<p class="fs-5" id="texto">'+entradaDesencriptada+'</p>';
                document.getElementById("button-mensaje").classList.remove("d-none");
                elementoEntrada.value = "";
        }else {
                alert("Ingrese un texto");
                return false; 
        }
        
})

let btnCopiar = document.querySelector("#btnCopiar");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#texto").innerHTML;
    navigator.clipboard.writeText(Copiado);
});