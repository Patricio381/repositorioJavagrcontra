function checkLongitud(longitud) {
  //  TU CODIGO 

if (!longitud) return "Debe ingresar la longitud";
if (typeof longitud !== "string") return "La longitud recibida no es válida";
if (longitud < 3) return "La longitud debe ser mayor o igual a 3";
if (longitud > 10) return "La longitud debe ser menor o igual a 10";
return longitud
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */


  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!@#$%^&*()_+{}[]|:;<>,.?/~";

  var letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var caracteresDisponibles = letras;


  if (incluirEspeciales) {
    caracteresDisponibles += especiales;
  }
  if (incluirNumeros) {
    caracteresDisponibles += numeros;
  }
  if (incluirMayusculas) {
    caracteresDisponibles += letrasMayusculas;
  }

  var contrasena = "";

  if (longitud >= 3) {
    
    for (let i = 0; i < longitud; i++) {
      let indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
      let caracterAleatorio = caracteresDisponibles[indiceAleatorio];
      contrasena += caracterAleatorio;
    }
  }


  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
