import React from 'react'
import SignIn from '../../Components/sign-in-component/sign-in-compoenent'
import SignUp from '../../Components/signUp-component/singUp'
import './sign-in-up.scss'

const SignInAndSignUp = () => {
  return <div className='signInAndSignUp'>
    <SignIn />
    <SignUp />
  </div>
}

export default SignInAndSignUp