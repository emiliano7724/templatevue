
export default {

  applyRegexRule(regexRule, valueToTest) {

    // eslint-disable-next-line

    return valueToTest ? regexRule.test(valueToTest) : false;
  },
  validarEmail(valueToTest) {

    // eslint-disable-next-line
    const regexRule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return valueToTest ? regexRule.test(valueToTest) : false;
  },
  validarMinLength(lenght, expectedLenght) {
    return lenght >= expectedLenght;
  },
  validarMaxLength(lenght, expectedLenght) {
    return lenght <= expectedLenght;
 
  },

};
