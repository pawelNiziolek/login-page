const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {}

  //Convert empty fields to emty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //check email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Pole email jest wymagane"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Podany email jest nieprawidłowy"
  }

  //check password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Pole hasło jest wymagane"
  };

  return {
    errors,
    isValid: isEmpty(errors)
  }
}