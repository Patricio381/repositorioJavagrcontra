// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")


var asistente = {
    verPerfiles: function(opcion){
        /* TU CODIGO */


        if (opcion === "todo") {
          return perfiles; 
      }
      if (opcion === "nombre") {
          return perfiles.map(perfil => perfil.usuario);
      }
      if (opcion === "codigo") {
          return perfiles.map(perfil => perfil.codigo);
      }
      if (opcion === "nivel") {
          return perfiles.map(perfil => perfil.nivel_de_autorizacion);
      }
      if (opcion === "antiguedad") {
          return perfiles.map(perfil => perfil.antiguedad);
      }
      
      return "Opción no válida";

    },
    
    verPerfilesPorAntiguedad: function(){
        /* TU CODIGO */

        var perfilesCopy = perfiles.map((p) => p);

      return perfilesCopy.sort ((a, b) => b.antiguedad - a.antiguedad);


    },

    verAdministradores: function(){
        /* TU CODIGO */

      return perfiles.filter(function (perfil) {
        return perfil.nivel_de_autorizacion == "admin";
      });


    },

    modificarAcceso: function(usuario, codigo){
        /* TU CODIGO */
       
        var perfil = perfiles.find((perfil) => perfil.usuario == usuario);

        if (!perfil) return "usuario no encontrado";
        
       if (codigo.length !== 4 || isNaN(Number(codigo)))
        return "codigo de acceso invalido, debe contener 4 numeros"
    

       perfil.codigo = codigo;
       return "codigo de acceso modificado";
  },

};

// <----- NO TOCAR ------->
module.exports = {
    asistente
}

