import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('password does not match')
      return;
    }
    try {

    } catch (err) {

    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })

  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className="title">I donot have an account</h2>
        <span > Sign up with your email and password</span>
        <form className='sign-up-from' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            value={displayName}
            name='displayName'
            onChange={this.handleChange}
            label='Display Name'
            require
          >
          </FormInput>
          <FormInput
            type='text'
            value={email}
            name='email'
            onChange={this.handleChange}
            label='Email'
            require
          >
          </FormInput>
          <FormInput
            type='password'
            value={password}
            name='password'
            onChange={this.handleChange}
            label='Password'
            require
          >
          </FormInput>
          <FormInput
            type='password'
            value={confirmPassword}
            name='confirmPassword'
            onChange={this.handleChange}
            label='Confirm password'
            require
          >
          </FormInput>
          <CustomButton type='submit' >Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp