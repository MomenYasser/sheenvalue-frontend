import template from 'lodash/template'
import { validate } from '@babel/types';
export const isRequired = (message = 'This Field is Required') => value => ({
    valid : !!value,
    message
});

export const isEmail = (message = 'Email is not valid') => value => ({
    valid: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value),
    message,
})
export const minLength = (length,message = `Min length is ${length}`) =>value=> ({
    valid:value.length > length,
    message
})