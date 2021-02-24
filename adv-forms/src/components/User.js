import React from 'react'

function User(props) {
    const { details } = props
    return (
        <div>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>terms: {details.terms}</p>
        </div>
    )
}

export default User