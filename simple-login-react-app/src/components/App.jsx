import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm';


let isUserLoggedIn = false;


const App = () => {
  return (
    <div className='container'>
  {isUserLoggedIn?<LoginForm />:<RegisterForm />}
    </div>
  )
}

export default App