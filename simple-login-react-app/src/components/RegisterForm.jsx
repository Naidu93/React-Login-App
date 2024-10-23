import React from 'react'
import InputComponent from './InputComponent'
import Button from './Button'

const RegisterForm = () => {
  return (
    <div>
        <form action="">
            <InputComponent type="text" placeholder="Username" />
            <InputComponent type="password" placeholder="Password" />
            <InputComponent type="password" placeholder="Confirm password" />
            <Button text="Register"/>
        </form>
    </div>
  )
}

export default RegisterForm