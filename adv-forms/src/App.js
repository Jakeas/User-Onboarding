import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import User from './components/User'
import formSchema from './formSchema'
import * as yup from 'yup'
import './App.css';

const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',  
}

const initialUsers = []
const initialDisabled = true

function App() {
const [ users, setUsers ] = useState(initialUsers)
const [ formValues, setFormValues ] = useState(initialFormValues)
const [ formErrors, setFormErrors ] = useState(initialFormErrors)
const [ disabled, setDisabled ] = useState(initialDisabled)

const getUsers = () => {

    axios
      .get("https://reqres.in/api/users")
      .then((res)=>{
          setUsers(res.data.data)
          console.log(res.data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
   }

const postNewUser = (newUser) => {
  axios
    .post("https://reqres.in/api/users", newUser)
    .then((res) => {
      console.log(res.data)
      setUsers([res.data.data, ...users])
    })
    .catch((err) => {
      console.log(err)
    })
    setFormValues(initialFormValues)
}

const inputChange = (name, value) => {
  yup
    .reach(formSchema, name)
    .validate(value)
    .then(()=>{
      setFormErrors({...setFormErrors.formErrors, [name]: ''})
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({
      ...formValues, [name]: value
    })
}


const formSubmit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms.trim()
  }
  postNewUser(newUser)
}

useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map((user, i) => {
          return (
            <User key={i} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
