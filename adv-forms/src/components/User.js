import React from 'react'

function User(props) {
    const { details } = props
    console.log("user:", details)
    return (
        <div>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            
    {
        !!details.terms && !!details.terms.length &&
        <p>Terms Accepted: {details.terms.map((like, idx) => <span key={idx}>{like}</span>)}
        </p>
    }
        </div>
    )
}

export default User