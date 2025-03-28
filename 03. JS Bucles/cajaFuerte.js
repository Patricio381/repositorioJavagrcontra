function cajaFuerte(codigoSecreto, cantidadIntentos) {
  /* TU CODIGO */
  
  if (!codigoSecreto || codigoSecreto.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }


  for (
    let i = 0;
    // ?? porque? 4
    i < codigoSecreto.length;
    i++
  ) {
    let char = codigoSecreto[i];
  
    if (Number(char) || Number(char) === 0) {
      // continuar ....
      continue;

      // 1 . convierte el char en number
      // Number(char)
      // 2. a ese number de char se fija si no es un nan
    } else {
      return "El codigo secreto solo puede estar conformado por numeros"
    }

    // OPCION 2
    // if(Number.isNaN(Number(char))){
    //   return "El codigo secreto solo puede estar conformado por numeros";
    // }

    // OPCION 3
    // if(!Number(char) || Number(char) !== 0){
    //   return "El codigo secreto solo puede estar conformado por numeros";
    // }

    continue;
  }

  // c ...
  if (validarNumerosRepetidos(codigoSecreto)) {
    return "el codigo no puede tener numeros repetidos";
  }

  // d - se debe validar que la cantidad de intentos se encuentre entre 1 y 5 ( inclusive ), de lo contrario retornar "Solo se permite una cantidad de intentos mayor a 0 y menor a 6"

  // solo pueda ser 1 2 3 4 5
  if (!cantidadIntentos || cantidadIntentos < 1 || cantidadIntentos > 5) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }

  // e - en caso de que ninguna de las condiciones anteriores se cumpla, retornar el codigo secreto concatenado con la cantidad de intentos en formato de string

  return codigoSecreto.toString() + cantidadIntentos.toString();
}

function validarSoloNumeros(codigo) {
  for (let i = 0; i < codigo.length; i++) {
    let char = codigo[i];
    if (Number.isNaN(Number(char))) {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
    continue;
  }
}

function validarNumerosRepetidos(codigo) {
  // c - la funcion validarNumerosRepetidos debe ser una funcion que valide si el codigo poseen numeros repetidos, se debe invocar esta funcion dentro de la funcion cajaFuerte, y según su resultado: si es true, la funcion cajaFuerte debe retornar "el codigo no puede tener numeros repetidos".
  /* TU CODIGO */

  // 1. 9345
  // 2. 7232

  // 9 BUCLE
  // 9 == 3 ? SUB BUCLE
  // 9 == 4 ?
  // 9 == 5 ?
  // 3 BUCLE
  // 3 == 9 ? SUB BUCLE
  // 3 == 4 ?

  for (let i = 0; i < codigo.length - 1; i++) {
    // nivel 2
    for (let j = i + 1; j < codigo.length; j++) {
      let char1 = codigo[i];
      let char2 = codigo[j];

      // Si entras es porque encontraste
      if (char1 === char2) {
        return true;
      }
    }
  }

  
  return false;
}

// <------- Contador de intentos -----> no modificar
var contadorIntentos = 1;

function desbloquearCajaFuerte(
  codigoSecreto,
  cantidadIntentos,
  codigoDesbloqueo
) {
  // 3. La función desbloquearCajaFuerte, recibe el código secreto, el código de desbloqueo y recibirá la cantidad de intentos totales para poder desbloquear la caja fuerte
  /* TU CODIGO */

  // a - se debe hacer seguimiento al contador de intentos( no se debe crear )
  // Nota: la variable "contadorIntentos" ya vendrá escrita por defecto en el proyecto, no se debe modificar el nombre de esta variable.

  // Para el código de desbloqueo validar que el código de desbloqueo contenga 4 digitos, de lo contrario retornar "El codigo debe tener exactamente 4 digitos".
  if (codigoDesbloqueo.length !== 4)
    return "El codigo debe tener exactamente 4 digitos";

  // se debe validar que el código de desbloqueo sea conformado solo por números, aplicar un bucle For para validar si los caracteres del código son números, de lo contrario retornar "El codigo de desbloqueo solo puede estar conformado por numeros"
  validarSoloNumeros(codigoDesbloqueo);

  if (validarNumerosRepetidos(codigoDesbloqueo)) {
    return "el codigo no puede tener numeros repetidos";
  }

  if (codigoDesbloqueo === codigoSecreto) {
    return "Acceso concedido despues de : " + contadorIntentos + " intentos";
  } else {
  

    switch (true) {
      case codigoDesbloqueo % 2 === 0:
        console.log("codigo divisible por 2");
        break;
      case codigoDesbloqueo > codigoSecreto:
        console.log("codigo demasiado alto");
        break;
      default:
        console.log("codigo incorrecto");
        break;
    }
  }

  contadorIntentos++;
  if (contadorIntentos > cantidadIntentos)
    return "Acceso denegado. Se agotaron los intentos";
}

// <------- NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos,
};