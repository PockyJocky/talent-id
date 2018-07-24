const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.fName = !isEmpty(data.fName) ? data.fName : '';
    data.lName = !isEmpty(data.lName) ? data.lName : '';
    data.edipi = !isEmpty(data.edipi) ? data.edipi : '';

    if(!Validator.isLength(data.fName, { min: 2, max: 30})){
        errors.fName = 'Name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.name)){
        errors.fName = 'Provide your first name';
    }

    if(!Validator.isLength(data.lName, {min: 2, max: 30})){
        errors.lName = 'Name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.lName)){
        errors.lName = 'Provide your last name';
    }

    if(!Validator.isLength(data.edipi, {min: 10, max: 10})){
        errors.edipi = 'EDIPI number must be 10 digits';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};