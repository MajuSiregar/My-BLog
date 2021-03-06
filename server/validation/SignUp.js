const Validator = require('validator');
const isEmpty = require('is-empty');

const ValidateSignInput = (data) => {

   let errors = {};

   let { user_name, email, password } = data;

   user_name = !isEmpty(user_name) ? user_name : '';
   email = !isEmpty(email) ? email : '';
   password = !isEmpty(password) ? password : '';

   if(Validator.isEmpty(user_name)) {
      errors.user_name = 'Username is required';
   };

   if(Validator.isEmpty(email)) {
      errors.email = 'Email is required'
   } else if(!Validator.isEmail(email)) {
      errors.email = 'Enter a valid email ud'
   };

   if(Validator.isEmpty(password)) {
      errors.password = 'password is required'
   } else if(!Validator.isLength(password, { min : 6, max : 30})) {
      errors.password = 'Password must be least 6 Character'
   };

   return { errors, isValid : isEmpty(errors)};

};
module.exports = ValidateSignInput;