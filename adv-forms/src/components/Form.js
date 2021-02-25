import React from 'react'

function Form (props) {

    const {
        values,
        change,
        submit,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { checked, value, name, type } = evt.target
        const valueToUse = type ==='checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            
            <div>
                <div>{errors.first_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            <label>First Name
                <input
                type='text'
                name='first_name'
                onChange={onChange}
                value={values.first_name}
                />
            </label>
            <label>Email
                <input
                type='text'
                name='email'
                onChange={onChange}
                value={values.email} 
                />
            </label>
            <label>Password
                <input
                type='text'
                name='password'
                onChange={onChange}
                value={values.password} 
                />
            </label>
            <label>Accept Terms and Conditions
                <input
                type='checkbox'
                name='terms'
                onChange={onChange}
                checked={values.terms} 
                />
            </label>

            <button>Submit</button>
        </form>
    )
}

export default Form