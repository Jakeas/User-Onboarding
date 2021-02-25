import React from 'react'

function User(props) {
    const { details } = props
    console.log("user:", details)
    return (
        <div>
            <h2>{details.first_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            {/* <p>Agree to terms: {details.terms}</p> */}
          
        </div>
    )
}

export default User