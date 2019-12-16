import template from 'lodash/template';

export const isRequired = (message = "This field is required") => value => ({
    valid: !!value,
    message,
});

export const isEmail = (message = "Email is not valid") => value => ({
    valid: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value),
    message,
});

export const minLength = (length, message = template('Min length is <%= length %>')) => value => ({
    valid: value.length >= length,
    message: message({ length }),
});

export const isEqual = ( message ="Passwords didn't match") => (value,password) => ({
    valid: password === value ,
    message,
});