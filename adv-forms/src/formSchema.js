import React from 'react'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .required('First name is required'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required'),
    terms: yup.boolean()
    .oneOf([true], 'Must accept terms and conditions!')
})

export default formSchema