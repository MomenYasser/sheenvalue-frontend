import template from 'lodash/template';

export const isRequired = (message = "This field is required") => value => ({
    valid: !!value,
    message,
});

export const isEmail = (message = "Email is not valid") => value => ({
    valid: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value),
    message,
});

export const isSame = (
    getValue,
    message = " field1  is not same as  field2 ") => value2 => {
        let value1 =getValue()
        return{
              valid: value1 === value2,
              message,
           };}

export const minLength = (length, message = template('Min length is <%= length %>')) => value => ({
    valid: value.length > length,
    message: message({ length }),
});