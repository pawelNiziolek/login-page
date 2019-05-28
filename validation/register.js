const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {}

  //convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Pole imie jest wymagane"
  };

  //email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Pole email jest wymagane"
  } else if (
    !Validator.isEmail(data.email)) {
    errors.email = "Email jest niepoprawny"
  }

  //password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Pole hasło jest wymagane"
  }

  if (validator.isEmpty(data.password2)) {
    errors.password = "Potwierdź hasło"
  }

  if (!Validator.isLength(data.password, {
      min: 6,
      max: 30
    })) {
    errors.password = "Hasło musi zawierać od 6 do 30 znaków"
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Hasła muszą byc takie same"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}