import * as Yup from "yup";

/**
 * This code block is importing the entire Yup library and assigning 
 * it to the variable Yup using the syntax import * as Yup from "yup". 
 */

export const signUpSchema =  Yup.object({

    name: Yup.string().min(2,"Name must be at least 2 characters long").max(25).required('Please enter your name: '),
    email: Yup.string().email().required("Please enter your email: "),
    password: Yup.string().min(6).required("Plese enter your password: "),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'),null]) /**if the input value matches the password field, validation succeeds, otherwise, it fails. */

});


/**
 * Yup.string().required().oneOf([Yup.ref('password'),null]), which means that the input must be the same as the password field and it is required.
 * The oneOf() method is used to compare the input value with the value of another field (password in this case) using Yup.ref() method. 
 * f the input value matches the password field, validation succeeds, otherwise, it fails.
 */