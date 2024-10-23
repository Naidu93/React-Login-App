import React from 'react'
import InputComponent from './InputComponent'
import Button from './Button'

const LoginForm = () => {
  return (
    <div>
        <form action="">
            <InputComponent type="text" placeholder="Username" />
            <InputComponent type="password" placeholder="Password" />
            <Button text="login" />
        </form>
    </div>
  )
}

export default LoginForm