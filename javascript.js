//Función que CIFRA el mensaje
function cifrarTextocifrarTexto() {
    var texto = document.querySelector('#area-mensaje').value;

    if (validarCaracteres(texto) == true) {
        var textoCifrado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    } 

    else {
        textoCifrado = "Caracter inválido";
    }
    
    document.querySelector('#area-resultado').value = textoCifrado;
}

//Al hacer click en el botón "CIFRAR" se muestra el mensaje cifrado en el panel de la derecha
var botonCifrar = document.querySelector('.botonCifrar');
botonCifrar.onclick = cifrarTextocifrarTexto;

//Función que DESCIFRA el mensaje
function descifrarTexto() {
    var texto = document.querySelector("#area-mensaje").value;

    if (validarCaracteres(texto) == true) {
    var textoDescifrado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    }
    
    else {
        textoDescifrado = "letra invalida";
    }

    document.querySelector("#area-resultado").value = textoDescifrado;
}

//Al hacer click en el botón "Descencriptar" se muestra el mensaje cifrado en el panel de la derecha
var botonDescifrar = document.querySelector(".botonDescifrar");
botonDescifrar.onclick = descifrarTexto;


//Copia el mensaje al hacer click en el boton "Copiar"
function copiarTexto () {
    var texto = document.querySelector("#area-resultado").value;
    navigator.clipboard.writeText(texto);
}

var botonCopiar = document.querySelector(".botonCopiar");
botonCopiar.onclick = copiarTexto;


//Se verifica si el mensaje ingresado posee caracteres inválidos
function validarCaracteres (textoAValidar) {
    var filtro = "abcdefghijklmnñopqrstuvwxyz!¡?¿ "; //<--Caracteres únicamente válidos

    for (var i = 0; i < textoAValidar.length; i++) {

        var caracterValido = false;
        for (var j = 0; j < filtro.length; j++) {

            if (textoAValidar[i] == filtro[j]) {
                caracterValido = true;
                break;
            }
        }
        if (caracterValido == false) {
            return false;
        } 
    }
    return true;
}