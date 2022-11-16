
export default {

  procesarErrores(errors) {
    var errores = [];
    var erroresString = JSON.stringify(errors);
    var erroresJson = JSON.parse(erroresString);

    for (var key in erroresJson) {
   
      /* eslint-disable no-prototype-builtins */
      if (erroresJson.hasOwnProperty(key)) {
       
        errores.push(erroresJson[key]);
      }
    }

    return errores;
  },

};
